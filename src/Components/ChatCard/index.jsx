import React from "react";
import "./styles.css";

const ChatCard = () => {
  return (
    <div className="chat-card">
      <div className="chat-avatar">
        <img
          className="chat-avatar-img"
          src="https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000"
          alt=""
        />
      </div>
      <div className="messages">
        <div className="contact-name">Mr. xyz</div>
        <div className="message">~ Hello</div>
      </div>
      <div>
        <p className="timestamp">5:30 Pm</p>
      </div>
    </div>
  );
};

export default ChatCard;
