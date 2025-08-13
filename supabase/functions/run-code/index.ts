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
    const requestBody = await req.json();
    console.log('Request body:', requestBody);
    
    const { languageId, sourceCode, stdin } = requestBody;

    if (!languageId || !sourceCode) {
      return new Response(
        JSON.stringify({ output: 'Error: Missing languageId or sourceCode' }), 
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

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
    
    if (!submissionResponse.ok) {
      const errorText = await submissionResponse.text();
      console.error('Judge0 submission failed:', errorText);
      return new Response(
        JSON.stringify({ 
          output: `Judge0 API Error: ${submissionResponse.status} - ${errorText}`,
          status: 'Error'
        }), 
        {
          status: 200, // Return 200 but with error in output
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const submission = await submissionResponse.json();
    console.log('Judge0 submission response:', submission);
    
    if (!submission.token) {
      console.error('No token received from Judge0:', submission);
      return new Response(
        JSON.stringify({ 
          output: `Failed to submit code: ${JSON.stringify(submission)}`,
          status: 'Error'
        }), 
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Poll for result
    console.log('Starting to poll for result with token:', submission.token);
    let attempts = 0;
    const maxAttempts = 30;
    
    while (attempts < maxAttempts) {
      console.log(`Polling attempt ${attempts + 1}/${maxAttempts}`);
      
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      
      const resultResponse = await fetch(`https://judge0-ce.p.rapidapi.com/submissions/${submission.token}?base64_encoded=true`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fed3a3946fmshe1f89c5a670b1b0p137ccdjsn3d9e937d727f',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        }
      });

      console.log('Judge0 result response status:', resultResponse.status);
      
      if (!resultResponse.ok) {
        const errorText = await resultResponse.text();
        console.error('Judge0 result fetch failed:', errorText);
        return new Response(
          JSON.stringify({ 
            output: `Failed to get result: ${resultResponse.status} - ${errorText}`,
            status: 'Error'
          }), 
          {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      const result = await resultResponse.json();
      console.log('Judge0 result:', result);
      
      if (result.status && result.status.id <= 2) {
        // Still processing (In Queue = 1, Processing = 2)
        console.log('Still processing, waiting...');
        attempts++;
        continue;
      }

      // Process completed
      console.log('Processing completed with status:', result.status);
      let output = '';
      
      if (result.stdout) {
        output = atob(result.stdout);
      } else if (result.stderr) {
        output = `Runtime Error: ${atob(result.stderr)}`;
      } else if (result.compile_output) {
        output = `Compilation Error: ${atob(result.compile_output)}`;
      } else if (result.message) {
        output = `Error: ${result.message}`;
      } else {
        output = 'No output generated';
      }

      console.log('Final output:', output);
      return new Response(
        JSON.stringify({ 
          output,
          status: result.status?.description || 'Completed',
          time: result.time || null,
          memory: result.memory || null
        }), 
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Polling timeout reached');
    return new Response(
      JSON.stringify({ 
        output: 'Execution timeout - the code took too long to execute. Please check for infinite loops.',
        status: 'Timeout'
      }), 
      {
        status: 200,
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