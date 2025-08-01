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

    return (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '8px', background: '#222', borderRadius: '8px', width: '100%', maxWidth: '700px', margin: '0 auto' }}>
            <textarea
                style={{
                    flex: 1,
                    color: "#fff",
                    background: "#222",
                    border: "1px solid #444",
                    borderRadius: "4px",
                    padding: "8px",
                    fontSize: "1rem",
                    resize: "none",
                    minHeight: "32px",
                    maxHeight: "60px",
                    height: "36px",
                    outline: "none",
                    width: "100%"
                }}
                rows={2}
                placeholder="Type your message..."
                value={content}
                onChange={handleChange}
                onKeyDown={handleEnterPress}
            />
            <button
                onClick={handleContentSend}
                style={{
                    background: "#444",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "8px 16px",
                    fontSize: "1rem",
                    cursor: "pointer"
                }}
            >
                Send
            </button>
        </div>
    )
}
