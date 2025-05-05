import React, { useEffect, useState } from "react";
import { sendMessage, listenForMessages } from "./chatService.js";
import images from "../../images/assests";
import { auth } from "../../../firebaseConfig";
import "./chats.css"

const Chats = () => {
  const [messages, setMessages] = useState([]);
  const [receiverId, setReceiverId] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(null);

  // Correct useEffect setup
  useEffect(() => {
    const unsubscribe = listenForMessages((newMsgs) => {
      setMessages((prevMessages) => {
        const combined = [...prevMessages, ...newMsgs];
        const receivedMsgs = combined.filter(msg => msg.from !== currentUserId);
        if (receivedMsgs.length > 4) {
          let count = 0;
          for (let i = 0; i < combined.length; i++) {
            if (combined[i].from !== currentUserId) {
              count++;
              if (count > 4) {
                combined.splice(i, 1);
                break;
              }
            }
          }
        }
        return combined;
      });
    });
    return () => unsubscribe();
  }, [currentUserId]);

  // Auth state listener
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUserId(user.uid);
      }
      setLoading(false);
    });

    return () => unsubscribeAuth(); // Cleanup the auth state listener
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container_ip">
      <div style={{ marginBottom: "20px" }} className="storage">
       
      </div>
      <div className="message_container">
  {messages.map((msg, index) => {
    const isSentByCurrentUser = msg.from === currentUserId;
    return (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: isSentByCurrentUser ? "flex-end" : "flex-start"
        }}
      >
        <div
          style={{
            backgroundColor: isSentByCurrentUser ? "#4caf50" : "#1e1e1e",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "60%",
            wordWrap: "break-word",
            textAlign: "left"
          }}
        >
          <strong>{isSentByCurrentUser ? "You" : msg.from}</strong>: {msg.text}
        </div>
      </div>
    );
  })}
   <input
          type="text"
          placeholder="Enter receiver UID "
          value={receiverId}
          id="receiver_input"
          onChange={(e) => setReceiverId(e.target.value)}
          style={{ marginRight: "10px", padding: "5px", color:"white" }}
          className="custom-input"
        />
  <div className="button_container">
  <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ marginRight: "10px", padding: "5px",}}
          id="message_input"
          className="custom-input"
        />
                <button
          onClick={() => {
            if (receiverId && newMessage) {
              sendMessage(receiverId, newMessage);
              setNewMessage("");
            }
          }}
          style={{ padding: "5px 10px" }}
        >
          Send
        </button>
        <button
          onClick={() => setMessages([])}
          style={{
            marginBottom: "10px",
            padding: "6px 12px",
            backgroundColor: "red",
            color: "white",
            marginLeft:"10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            alignSelf: "flex-end"
          }}
        >
          Delete All Chats
        </button>
  </div>


</div>
    </div>

  );
};

export default Chats;