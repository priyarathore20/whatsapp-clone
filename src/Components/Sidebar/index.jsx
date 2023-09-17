import React from "react";
import { MdHistory } from "react-icons/md";
import { LuMessageSquarePlus } from "react-icons/lu";
import { BsFilter, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import ChatCard from "../ChatCard";
import "./styles.js";
import {
  Header,
  HeaderIcon,
  HeaderIcons,
  SearchInput,
  SearchInputWrapper,
  SidebarWrapper,
} from "./styles";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  conversations = [],
  handleCurrentConversation = () => {},
}) => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
        navigate("/login");
      })
      .catch(() => console.log("error"));
  };

  return (
    <SidebarWrapper>
      <Header>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
          alt=""
        />

        <HeaderIcons>
          <HeaderIcon>
            {" "}
            <HiMiniUserGroup />
          </HeaderIcon>
          <HeaderIcon>
            {" "}
            <MdHistory />
          </HeaderIcon>
          <HeaderIcon>
            {" "}
            <LuMessageSquarePlus />
          </HeaderIcon>
          <HeaderIcon>
            {" "}
            <BsThreeDotsVertical onClick={logoutUser} />
          </HeaderIcon>
        </HeaderIcons>
      </Header>
      <SearchInputWrapper>
        <SearchInput>
          <span>
            <BsSearch />
          </span>
          <input type="search" placeholder="Search or start new chat" />
        </SearchInput>
        <div>
          <BsFilter />
        </div>
      </SearchInputWrapper>
      {conversations?.map((item, index) => (
        <ChatCard
          key={index}
          {...item}
          handleCurrentConversation={handleCurrentConversation}
        />
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
