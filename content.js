import { OpenAIApi, Configuration } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration= new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai =new OpenAIApi(configuration);

async function replaceHeadlinesWithRhymes() {
    const headlines = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headlines.forEach((headline) => {
      const originalText = headline.textContent;
       
        const chatCompletion = await openai.createChatCompletion({
            model:'gpt-3.5-turbo',
            messages: [
                {role: 'user', content: originalText + ' Convert this headlines into seperate mini rhymes.'},
            ],
        });
    
      const rhymeText = chatCompletion.data.choices[0].message.content;
        headline.textContent = rhymeText;
    });
  }
  
  replaceHeadlinesWithRhymes();
  

  export default replaceHeadlinesWithRhymes;
