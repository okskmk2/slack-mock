import React, { useState, useEffect } from "react";
import ChatInput from "./ChatInput/ChatInput";
import MessageCard from "./MessageCard";
import socket from "./socket";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  return (
    <div className="chatroom">
      <div className="message-container">
        {messages.map((v, i) => (
          <MessageCard message={v} key={i} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatRoom;
