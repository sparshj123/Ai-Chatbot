import styles from './App.module.css';

function App() {


  return (
    <>
      <div className={styles.App}>
      <header className={styles.Header}>
        <img src="/chat-bot.png" alt="Logo" className={styles.Logo} />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer} />
        </div>
    </>
  )
}

export default App
