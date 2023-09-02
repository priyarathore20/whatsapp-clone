import React from "react";
import { MdGroups2, MdHistory } from "react-icons/md";
import { LuMessageSquarePlus } from "react-icons/lu";
import { BsFilter, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
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
          <MdGroups2 />
          <MdHistory />
          <LuMessageSquarePlus />
          <BsThreeDotsVertical />
        </div>
      </header>
      <div>
        <div>
          <span>
            <BsSearch />
          </span>
          <input type="search" placeholder="Search or start new chat" />
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
