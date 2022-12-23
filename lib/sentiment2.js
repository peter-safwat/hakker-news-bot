const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
// Organization ID - org-FLJOzKI3ObxeW5Qq9HgblI1n
const openai = new OpenAIApi(configuration);

async function r(){
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: "Classify the sentiment in these tweets:\n\n1. \"I can't stand homework\"\n2. \"This sucks. I'm bored 😠\"\n3. \"I can't wait for Halloween!!!\"\n4. \"My cat is adorable ❤️❤️\"\n5. \"I hate chocolate\"\n\nTweet sentiment ratings:",
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  console.log(response)
}

r()
