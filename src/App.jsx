import styles from './App.module.css';
import Chat from './components/Chat/Chat';
import { useState } from 'react';
import Controls from './components/Chat/Controls/Controls';
import { GoogleGenAI } from '@google/genai';

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: 'Welcome to the AI Chatbot! How can I assist you today?'
}

const googleAi= new GoogleGenAI(import.meta.env.VITE_GOOGLE_API_KEY);
const gemini= googleAi.getGenealModel({
  model: 'gemini-1.5-flash'}
);
const chat = gemini.startChat({history: []});
function App() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);

function addMessage(message){
setMessages(prevMessages => [
      ...prevMessages,
      message
    ]);
}
  async function handleSend(content) {
   addMessage({content, role: 'user'});
    try {
      const result= await chat.sendMessage(content);
      addMessage({
        content: result.response.text(),
        role: 'assistant'
      });
    } catch (error) {
      addMessage({
        content: 'Error: ' + error.message,
        role: 'assistant'
      });
      
    }
  }

  return (
    <>
      <div className={styles.App}>
        <header className={styles.Header}>
          <img src="/chat-bot.png" alt="Logo" className={styles.Logo} />
          <h2 className={styles.Title}>AI Chatbot</h2>
        </header>
        <div className={styles.ChatContainer}>
          <Chat messages={messages} />
        </div>
        <Controls onSend={handleSend} />
      </div>
    </>
  );
}

export default App;
