import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_GPT_API_KEY,
  dangerouslyAllowBrowser: true,

});

export class Assisstant{
    #model;
    constructor(model = 'gpt-3.5-turbo') {
        this.#model = model;
    }
    async chat(content,history){
        try {
            const result= await openai.chat.completions.create({
                model: this.#model,
                messages: [
                    ...history,
                    { role: 'user', content }
                ]
            });
            return result.choices[0].message.content;
        } catch (error) {
            throw error;
        }
    }
}