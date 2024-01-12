import React from "react";
import * as AdaptiveCards from "adaptivecards";
import "./chat.css";

const WelcomeCard = ({ username }) => {
  const cardPayload = {
    type: "AdaptiveCard",
    version: "1.0",
    body: [
      {
        type: "TextBlock",
        text: `Welcome, ${username}!`,
        size: "large",
        weight: "bolder",
      },
    ],
  };

  const adaptiveCard = new AdaptiveCards.AdaptiveCard();
  adaptiveCard.parse(cardPayload);

  return <div className="welcome-card" ref={(n) => adaptiveCard.render(n)} />;
};

export default WelcomeCard;
