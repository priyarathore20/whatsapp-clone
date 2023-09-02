import React from "react";
import { MdHistory } from "react-icons/md";
import { LuMessageSquarePlus } from "react-icons/lu";
import { BsFilter, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import ChatCard from "../ChatCard";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <div>
          <img
            className="avatar-img"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg"
            alt=""
          />
        </div>
        <div className="header-icons">
          <HiMiniUserGroup className="header-icon" />
          <MdHistory className="header-icon" />
          <LuMessageSquarePlus className="header-icon" />
          <BsThreeDotsVertical className="header-icon" />
        </div>
      </header>
      <div className="search-input">
        <div>
          <span>
            <BsSearch className="search-icon" />
          </span>
          <input
            className="search"
            type="search"
            placeholder="Search or start new chat"
          />
        </div>
        <div>
          <BsFilter />
        </div>
      </div>
      <ChatCard />
    </div>
  );
};

export default Sidebar;
