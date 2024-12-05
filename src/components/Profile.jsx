import "./styles/Profile.css";
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
      <div id="profile">
        <div id="profileCover"></div>
        <div id="coverBottom">
          <div id="dp">
            <img src={dp} alt="" />
          </div>
          <div id="profileUsername">
            {user?.username ? <p>{user.username}</p> : <p>Please log in</p>}
          </div>

          <div id="editProfile" onClick={handleEditProfileClick}>
            Edit Profile
          </div>
        </div>
        <div id="timeline">
          <div>
            <div id="timelineTag" className="timelineItems">
              Timeline
            </div>
            <div id="about" className="timelineItems">
              About
            </div>
            <div id="freinds" className="timelineItems">
              Freinds
            </div>
            <div id="photos" className="timelineItems">
              Photos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
