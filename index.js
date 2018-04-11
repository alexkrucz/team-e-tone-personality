var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var config = require('./config');

// Start the visualizer service by authenticating with the API key.
var personality_insights = new PersonalityInsightsV3(
        {
        username: config.username,
        password: config.password,
        version_date: '2018-04-01'
        });
        
// Example text needs to be at least 100 words.
var text = "It is a personal situation that I went through. I lost my brother while he was doing his MBA in India, that was a real shock to me and my family. It has completely changed my life since then, I had to support my family, I had to pick myself up from when everything went tumbling down. I am a completely changed person, I am more responsible, much more confident, I can face any situation that may come in the future and still come out with flying colours. So it life has taught me a lot and I think that the dedication and confidence on yourself is really important.I think risk taking is really important in your professional career and in my career I have taken a lot of risks. Initially, I was completely in a technical field as a Salesforce consultant, however due to my trust in business functions such as marketing, sales, operations. I requested, I showed the potential, and I changed my field from Salesforce consultant to being a business development executive. It really worked well for me, I was successful, I could break through the second largest market for my company which is India, and I was really rewarded financially and as well recognized in the office. So I believe risktaking should be there for professional careers.If I am asked to do something outside of my company's policy I would first analyze the task, I would understand the complexity, I would try to understand what would be the consequences if I actually go ahead with what my boss is asking me to do. I would then prepare a small sheet or a list of consequences, then I would go and discuss with him that these are the points that need to be taken into consideration and do we still want to move ahead with that. If he says yes or we could find a better alternative so actually don't have to go outside the companies policy. Even if he asks me to move ahead with the task I would definitely bring in HR or his boss or the authority in charge so that they are aware of what I am being asked to do. Of course this all will be done with my immediate bosses' understanding and confidence.";

// The data.
var params = 
        {
        content: text,
        content_type: 'text/plain',
        raw_scores: true
        };


// Call the Personality Insights API.
personality_insights.profile(params, function(error, response) 
        {
        // No error, so output the response.
        if (!error)
            {
            var res = JSON.stringify(response, null, 2);
            console.log(res);   
            }
        else
            {
            console.log('Error:', error);
            }
        });