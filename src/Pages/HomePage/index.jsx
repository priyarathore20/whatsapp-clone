import React from "react";
import Sidebar from "../../Components/Sidebar";
import ChatPage from "../../Components/ChatPage";
import "./styles.css";

const HomePage = () => {
  return (
    <div className="home-content">
      <Sidebar />
      <ChatPage />
    </div>
  );
};

export default HomePage;
