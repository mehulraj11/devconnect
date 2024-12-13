

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
    <div className="w-full bg-gray-800 text-white">
  <nav className="flex flex-col md:flex-row items-center justify-between p-4">
    {/* Logo Section */}
    <div className="flex items-center mb-4 md:mb-0">
      <div className="text-xl md:text-2xl flex items-center space-x-2">
        <div>
          <CodeIcon />
        </div>
        <div id="devconnect" className="font-bold">DevConnect</div>
      </div>
    </div>

    {/* Search Section */}
    <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
      <input
        type="text"
        value={navSearch}
        onChange={handleNavSearch}
        className="w-full md:w-64 p-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
        placeholder="Search..."
      />
      <div
        id="searchicon"
        onClick={handleNavSearchClick}
        className="ml-2 p-2 bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-700"
      >
        <SearchIcon className="text-white" />
      </div>
    </div>

    {/* Navigation Links */}
    <div className="flex items-center space-x-6">
      <div className="navicons cursor-pointer hover:text-indigo-400">Home</div>
      <div className="navicons cursor-pointer hover:text-indigo-400">
        <ChatIcon />
      </div>
      <div className="navicons cursor-pointer hover:text-indigo-400">
        <NotificationsIcon />
      </div>
      <div className="navicons cursor-pointer hover:text-indigo-400">
        <Person2Icon />
      </div>
    </div>
  </nav>
</div>

  );
};
