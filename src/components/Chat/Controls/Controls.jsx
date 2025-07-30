import styles from './Controls.module.css';
import { useState } from 'react';
export default function Controls({onSend}){
    const[content, setContent] = useState("");
    function handleChange(event) {
        setContent(event.target.value);
    }
    function handleContentSend(){
        if(content.length >0){
            onSend(content);
            setContent("");
        }
    }
      function handleEnterPress(e){
        if(e.key==="Enter"&& !e.shiftKey){ // Check for Enter key without Shift
          e.preventDefault();
         handleContentSend();
          // Clear the textarea after sending
          setContent("");
        }
      }

    return(
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                
                <textarea 
                placeholder="Message AI Chat"
                className={styles.TextArea}
                value={content}
                onChange={handleChange}
                onKeyDown={handleEnterPress}
                />
            </div>
            <button className={styles.Button}
            onClick={handleContentSend}>
                Send
            </button>
        </div>
    )
}
