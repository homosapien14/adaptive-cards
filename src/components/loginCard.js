import React, { useState } from "react";
import * as AdaptiveCards from "adaptivecards";
import "./chat.css";

const LoginCard = ({ onLogin }) => {
  const [username, setUsername] = useState("demo");
  const [password, setPassword] = useState("password");

  const handleInputChange = (id, value) => {
    if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleLoginSubmit = () => {
    console.log("Username:", username);
    console.log("Password:", password);

    // Dummy authentication logic (replace with actual authentication)
    if (username === "demo" && password === "password") {
      // Call the onLogin callback to notify the parent component
      onLogin(username);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const cardPayload = {
    type: "AdaptiveCard",
    version: "1.0",
    body: [
      {
        type: "TextBlock",
        text: "Login Card",
        size: "large",
        weight: "bolder",
      },
      {
        type: "Input.Text",
        id: "username",
        placeholder: "Username",
        value: username,
        onchange: (event) => handleInputChange("username", event.target.value),
      },
      {
        type: "Input.Text",
        id: "password",
        placeholder: "Password",
        isPassword: true,
        value: password,
        onchange: (event) => handleInputChange("password", event.target.value),
      },
    ],
  };

  const adaptiveCard = new AdaptiveCards.AdaptiveCard();
  adaptiveCard.parse(cardPayload);

  return (
    <div className="login-card">
      <div ref={(n) => adaptiveCard.render(n)} />
      <button className="login-button" onClick={handleLoginSubmit}>
        Login
      </button>
    </div>
  );
};

export default LoginCard;
