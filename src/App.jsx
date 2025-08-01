import styles from './App.module.css';
import Chat from './components/Chat/Chat';
import Controls from './components/Chat/Controls/Controls';
import { useState } from 'react';
import { Assistant } from './assisstant/gemini'; // Path to your Gemini Assistant class

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: 'Welcome to the AI Chatbot! How can I assist you today?'
};

const assistant = new Assistant(); // ✅ Create Gemini instance once at top

function App() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);

  function addMessage(message) {
    setMessages(prevMessages => [...prevMessages, message]);
  }

  async function handleSend(content) {
    addMessage({ content, role: 'user' });

    try {
      const response = await assistant.chat(content);

      addMessage({
        content: response,
        role: 'assistant',
      });
    } catch (error) {
      addMessage({
        content: '❌ Error: ' + error.message,
        role: 'assistant',
      });
    }
  }

  return (
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
  );
}

export default App;
