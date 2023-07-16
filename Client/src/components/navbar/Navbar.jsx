import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./Navbar.scss";
import { useState } from "react";

function NavBar() {
  const [isScrolled, setScroll] = useState(false);

  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar new" : "navbar"}>
      <div className="container">
        <div className="left">
          <span className="title">BLOCKBUSTER</span>
          <span>Home</span>
          <span>Movies</span>
          <span>Series</span>
          <span>Popular</span>
          <span>My Lists</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Profile</span>
          <Notifications className="icon" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Help Center</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
