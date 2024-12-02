import "./styles/Navbar.css";

import CodeIcon from "@mui/icons-material/Code";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
export const Navbar = () => {
  const [navSearch, setNavSearch] = useState("");
  const handleNavSearch = (e) => {
    setNavSearch(e.target.value);
  };
  const handleNavSearchClick = () => {
    console.log(navSearch);
    setNavSearch("");
  };
  return (
    <div id="navbar">
      <nav>
        <div id="navLogo">
          <div>
            <CodeIcon />
          </div>
          <div id="devconnect">DevConnect</div>
        </div>
        <div id="navSearch">
          <div>
            <input type="text" value={navSearch} onChange={handleNavSearch} />
          </div>
          <div id="searchicon" onClick={handleNavSearchClick}>
            <SearchIcon />
          </div>
        </div>
        <div id="navComps">
          <div className="navicons"> Home</div>
          <div className="navicons">
            <ChatIcon />
          </div>
          <div className="navicons">
            <NotificationsIcon />
          </div>
          <div className="navicons">
            <Person2Icon />
          </div>
        </div>
      </nav>
    </div>
  );
};
