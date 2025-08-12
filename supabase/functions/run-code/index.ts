import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { languageId, sourceCode, stdin } = await req.json();

    // Submit to Judge0 API
    const submissionResponse = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'your-rapidapi-key-here', // Replace with actual key
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      body: JSON.stringify({
        language_id: languageId,
        source_code: sourceCode,
        stdin: stdin || '',
      }),
    });

    const submission = await submissionResponse.json();
    
    if (!submission.token) {
      throw new Error('Failed to submit code for execution');
    }

    // Poll for result
    let attempts = 0;
    const maxAttempts = 30;
    
    while (attempts < maxAttempts) {
      const resultResponse = await fetch(`https://judge0-ce.p.rapidapi.com/submissions/${submission.token}?base64_encoded=true`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'your-rapidapi-key-here', // Replace with actual key
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        }
      });

      const result = await resultResponse.json();
      
      if (result.status.id <= 2) {
        // Still processing (In Queue = 1, Processing = 2)
        await new Promise(resolve => setTimeout(resolve, 1000));
        attempts++;
        continue;
      }

      // Process completed
      let output = '';
      
      if (result.stdout) {
        output = atob(result.stdout);
      } else if (result.stderr) {
        output = `Error: ${atob(result.stderr)}`;
      } else if (result.compile_output) {
        output = `Compilation Error: ${atob(result.compile_output)}`;
      } else {
        output = 'No output';
      }

      return new Response(
        JSON.stringify({ 
          output,
          status: result.status.description,
          time: result.time,
          memory: result.memory
        }), 
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        output: 'Execution timeout - please try again',
        status: 'Timeout'
      }), 
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in run-code function:', error);
    return new Response(
      JSON.stringify({ 
        output: `Error: ${error.message}`,
        status: 'Error'
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});