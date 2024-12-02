import "./styles/Profile.css";
import { Navbar } from "./Navbar.jsx";
import dp from "../assets/WhatsApp Image 2024-11-30 at 2.40.18 PM.jpeg";
export const Profile = () => {
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
            <p>Mehul</p>
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
