
import { Navbar } from "./Navbar.jsx";
import dp from "../assets/WhatsApp Image 2024-11-30 at 2.40.18 PM.jpeg";
import { useContext } from "react";
import UserContext from "../context/UserContext.js";
export const Profile = () => {
  console.log(`Profile component`)
  const { user } = useContext(UserContext);
  console.log(user)
  const handleEditProfileClick = () => {
    console.log(`Edit Profile Click`);
  };
  return (
    <div>
  <Navbar />
  <div id="profile" className="bg-gray-100">
    <div id="profileCover" className="h-24 bg-white-500"></div>
    <div id="coverBottom" className="relative flex items-center space-x-4 mt-[-4rem] px-4">
      {/* Profile Picture */}
      <div id="dp" className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img src={dp} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Username */}
      <div id="profileUsername" className="text-center">
        {user?.username ? <p className="text-lg font-semibold">{user.username}</p> : <p className="text-lg font-semibold">Please log in</p>}
      </div>

      {/* Edit Profile Button */}
      <div id="editProfile" onClick={handleEditProfileClick} className="bg-blue-500 text-white py-2 px-6 rounded-full cursor-pointer">
        Edit Profile
      </div>
    </div>
    
    <div id="timeline" className="mt-8">
      <div className="flex justify-between px-4">
        <div id="timelineTag" className="timelineItems text-blue-500 cursor-pointer hover:text-blue-700">
          Timeline
        </div>
        <div id="about" className="timelineItems text-blue-500 cursor-pointer hover:text-blue-700">
          About
        </div>
        <div id="freinds" className="timelineItems text-blue-500 cursor-pointer hover:text-blue-700">
          Friends
        </div>
        <div id="photos" className="timelineItems text-blue-500 cursor-pointer hover:text-blue-700">
          Photos
        </div>
      </div>
    </div>
  </div>
</div>

  );
};