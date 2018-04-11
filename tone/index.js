// Use our Watson library.
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

// Require our config variables.
var config = require('./config');

// The text that we want to analyze the tone of.
var text = "If I am asked to do something outside of my company's policy I would first analyze the task, I would understand the complexity, I would try to understand what would be the consequences if I actually go ahead with what my boss is asking me to do. I would then prepare a small sheet or a list of consequences, then I would go and discuss with him that these are the points that need to be taken into consideration and do we still want to move ahead with that. If he says yes or we could find a better alternative so actually don't have to go outside the companies policy. Even if he asks me to move ahead with the task I would definitely bring in HR or his boss or the authority in charge so that they are aware of what I am being asked to do. Of course this all will be done with my immediate bosses' understanding and confidence.";

// Turn our text into valid json.
var input = { "text": text };

// The format that the tone analyzer needs. 
var params = 
        {
        'tone_input': input,
        'content_type': 'application/json'
        };

// Initialize the Tone Analyzer by giving it our credentials.
var tone_analyzer = new ToneAnalyzerV3(
        {
        username: config.username,
        password: config.password,
        version_date: '2018-04-01'
        });

// Use our Tone Analyzer variable to analyze the tone.
tone_analyzer.tone(params, function(error, response) 
        {
        // There's an error.
        if (error)
                {
                console.log('Error:', error);
                }
        // No error, we got our tone result.
        else
                {
                // The tone of the text, as determined by watson.
                var tone = JSON.stringify(response, null, 2)
                
                // Output Watson's tone analysis to the console.
                console.log("The tone analysis for \'" + text + "\' is:\n");
                console.log(tone);
                }
        });