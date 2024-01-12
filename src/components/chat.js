import React, { useState } from "react";
import LoginCard from "./loginCard";
import WelcomeCard from "./welcomeCard";
import "./chat.css";

const Chat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [hasDisplayedWelcome, setHasDisplayedWelcome] = useState(false);

  const handleLogin = (authenticatedUsername) => {
    setUsername(authenticatedUsername);
    setIsLoggedIn(true);

    // Update chat history with login message
    setChatHistory((prevHistory) => [
      ...prevHistory,
      {
        sender: "bot",
        message: `Hello, ${authenticatedUsername}! How can I assist you today?`,
      },
    ]);
  };

  const handleUserMessage = (userMessage) => {
    // Update chat history with user message
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "user", message: userMessage },
    ]);

    // Dummy bot response (replace with actual chat bot logic)
    const botResponse = getBotResponse(userMessage);

    // Update chat history with bot response
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "bot", message: botResponse },
    ]);
  };

  const getBotResponse = (userMessage) => {
    // Dummy bot logic (replace with actual chat bot logic)
    if (isLoggedIn) {
      // If user is logged in, respond with a welcome message only once
      if (!hasDisplayedWelcome) {
        setHasDisplayedWelcome(true);
        return `Welcome back, ${username}! How can I assist you today?`;
      } else {
        return "How can I assist you today?";
      }
    } else {
      // If user is not logged in, respond with a request to log in
      return "Please log in to continue.";
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.message}
            </div>
          ))}
        </div>

        {!isLoggedIn ? (
          <LoginCard onLogin={handleLogin} />
        ) : (
          !hasDisplayedWelcome && <WelcomeCard username={username} />
        )}

        <div className="user-input">
          <input
            type="text"
            placeholder="Type your message..."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleUserMessage(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
