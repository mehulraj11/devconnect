import "./styles/Login.css";
import { Link } from "react-router-dom";

import PhoneIcon from "@mui/icons-material/Phone";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
export const Login = () => {
  const { setUser } = useContext(UserContext);
  //   console.log(`Consoled into Login Page`);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    // console.log(formData);
    e.preventDefault();
    setUser(formData);
    setFormData(() => ({
      username: "",
      password: "",
    }));
  };

  return (
    <div id="loginPage">
      <div id="loginTitle">
        <p>LogIn</p>
      </div>
      <div id="thirdPartyLogin">
        <div className="thirdParty">
          <div className="icon">
            <PhoneIcon />
          </div>
          <div className="iconText">
            <p>Login With Phone Number</p>
          </div>
        </div>
        <div className="thirdParty">
          <div className="icon">
            <GoogleIcon />
          </div>
          <div className="iconText">
            <p>Login With Google</p>
          </div>
        </div>
        <div className="thirdParty">
          <div className="icon">
            <GitHubIcon />
          </div>
          <div className="iconText">
            <p>Login With GitHub</p>
          </div>
        </div>
      </div>
      <div className="text-with-lines">
        <span>OR</span>
      </div>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button onClick={handleSubmit} type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <a href="/forgot-password" className="forgot-password">
        Forgot Password?
      </a>
      <Link to="/signup">New to DevConnect? Sign Up</Link>
    </div>
  );
};
