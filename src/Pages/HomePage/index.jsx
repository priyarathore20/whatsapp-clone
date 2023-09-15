import React from "react";
import Sidebar from "../../Components/Sidebar";
import ChatPage from "../../Components/ChatPage";
import { Home } from "./Home.styled";
import Messages from "../Message";

const HomePage = () => {
  return (
    <Home>
      <Sidebar />
      <Messages />
      {/* <ChatPage /> */}
    </Home>
  );
};

export default HomePage;
