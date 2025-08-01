import { GoogleGenerativeAI } from "@google/generative-ai";

export class Assistant {
  #chat;

  constructor(model = "gemini-1.5-flash") {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEM_API_KEY);
    const modelInstance = genAI.getGenerativeModel({ model });

    // Start a chat session with history
    this.#chat = modelInstance.startChat({
      history: [],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    });
  }

  async chat(userInput) {
    try {
      const result = await this.#chat.sendMessage(userInput);

      // Get the text response from Gemini
      return result.response.text();
    } catch (err) {
      console.error("Gemini SDK error:", err);
      return "❌ Gemini SDK failed: " + err.message;
    }
  }
}
