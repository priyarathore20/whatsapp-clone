import React, { useEffect, useState } from "react";
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
  SearchCard,
  SearchInput,
  SearchInputWrapper,
  SidebarWrapper,
} from "./styles";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebaseConfig";
import { useSnackbar } from "notistack";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const Sidebar = ({
  conversations = [],
  handleCurrentConversation = () => {},
}) => {
  const auth = getAuth(app);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const db = getFirestore(app);
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
        setShowLogoutDialog(false);
        enqueueSnackbar("Logged out successfully", { variant: "success" });
      })
      .catch(() => console.log("error"));
    enqueueSnackbar("Error logging out. please try again", {
      variant: "error",
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const documentRef = doc(db, "chats", "E97mi4gDR3tUr1VcXM3v");
        const documentSnapshot = await getDoc(documentRef);

        if (documentSnapshot.exists()) {
          console.log(documentSnapshot.data());
        } else {
          console.log("No doc");
        }
      } catch (error) {
        console.log(error);
        return false;
        // }
      }
    })();
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleLogoutCancel = () => {
    setShowLogoutDialog(false);
  };

  const searchUser = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, "Profiles");
      const fieldToQuery = "phone";
      const valueToMatch = search;
      const q = query(collectionRef, where(fieldToQuery, "==", valueToMatch));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setUser(doc.data());
        setShow(true);
      });
    } catch (error) {
      console.log(error);
    }
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
            <BsThreeDotsVertical onClick={handleLogoutClick} />
            {showLogoutDialog && (
              <div className="logout-dialog">
                <p className="logout-para">Are you sure you want to logout?</p>
                <button className="logout-btn" onClick={handleLogoutCancel}>
                  Cancel
                </button>
                <button className="logout-btn" onClick={logoutUser}>
                  Logout
                </button>
              </div>
            )}
          </HeaderIcon>
        </HeaderIcons>
      </Header>
      <SearchInputWrapper>
        <SearchInput onSubmit={searchUser}>
          <span>
            <BsSearch type="submit" onClick={searchUser} />
          </span>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            placeholder="Search or start new chat"
          />
        </SearchInput>
        <div>
          <BsFilter />
        </div>
      </SearchInputWrapper>
      {user ? (
        <SearchCard show={show}>
          <img
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
            alt=""
          />
          <p>{user.name}</p>
        </SearchCard>
      ) : (
        <SearchCard>
          <p>No user found</p>
        </SearchCard>
      )}
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
