import React from "react";
import Message from "";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        <Message />
      </div>
      <SendMessage />
    </main>
  );
};
