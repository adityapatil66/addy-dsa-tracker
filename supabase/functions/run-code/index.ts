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
    console.log('Received request:', req.method);
    const { languageId, sourceCode, stdin } = await req.json();
    console.log('Request body parsed:', { languageId, hasSourceCode: !!sourceCode, hasStdin: !!stdin });

    // Submit to Judge0 API
    console.log('Submitting to Judge0 API...');
    const submissionResponse = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'fed3a3946fmshe1f89c5a670b1b0p137ccdjsn3d9e937d727f',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      body: JSON.stringify({
        language_id: languageId,
        source_code: sourceCode,
        stdin: stdin || '',
      }),
    });

    console.log('Judge0 submission response status:', submissionResponse.status);
    const submission = await submissionResponse.json();
    console.log('Judge0 submission response:', submission);
    
    if (!submission.token) {
      console.error('No token received from Judge0:', submission);
      throw new Error('Failed to submit code for execution: ' + JSON.stringify(submission));
    }

    // Poll for result
    console.log('Starting to poll for result with token:', submission.token);
    let attempts = 0;
    const maxAttempts = 30;
    
    while (attempts < maxAttempts) {
      console.log(`Polling attempt ${attempts + 1}/${maxAttempts}`);
      const resultResponse = await fetch(`https://judge0-ce.p.rapidapi.com/submissions/${submission.token}?base64_encoded=true`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fed3a3946fmshe1f89c5a670b1b0p137ccdjsn3d9e937d727f',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        }
      });

      console.log('Judge0 result response status:', resultResponse.status);
      const result = await resultResponse.json();
      console.log('Judge0 result:', result);
      
      if (result.status.id <= 2) {
        // Still processing (In Queue = 1, Processing = 2)
        console.log('Still processing, waiting...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        attempts++;
        continue;
      }

      // Process completed
      console.log('Processing completed with status:', result.status);
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

      console.log('Final output:', output);
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

    console.log('Polling timeout reached');
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