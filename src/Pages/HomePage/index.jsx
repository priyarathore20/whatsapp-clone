import React from "react";
import Sidebar from "../../Components/Sidebar";
import ChatPage from "../../Components/ChatPage";
import { Home } from "./Home.styled";

const HomePage = () => {
  return (
    <Home>
      <Sidebar />
      <ChatPage />
    </Home>
  );
};

export default HomePage;
