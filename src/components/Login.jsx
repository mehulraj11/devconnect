import { Link, useNavigate } from "react-router-dom";

import PhoneIcon from "@mui/icons-material/Phone";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
export const Login = () => {
  const { setUser } = useContext(UserContext);
  //   console.log(`Consoled into Login Page`);
  const navigate = useNavigate();
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

    navigate("./profile");
  };

  return (
    <div id="loginPage" className="flex flex-col items-center bg-yellow-200 p-6 rounded-lg shadow-lg max-w-md mx-auto">
  <div id="loginTitle" className="mb-6">
    <p className="text-center text-sm text-green-700">Login to continue</p>
  </div>
  <div id="thirdPartyLogin" className="flex flex-col space-y-3 mb-6 w-full">
    <div className="thirdParty flex items-center bg-green-300 p-3 rounded-md cursor-pointer hover:bg-green-400">
      <div className="icon text-green-900">
        <PhoneIcon />
      </div>
      <div className="iconText ml-4">
        <p className="text-lg font-semibold">Login With Phone</p>
      </div>
    </div>
    <div className="thirdParty flex items-center bg-blue-300 p-3 rounded-md cursor-pointer hover:bg-blue-400">
      <div className="icon text-blue-900">
        <GoogleIcon />
      </div>
      <div className="iconText ml-4">
        <p className="text-lg font-semibold">Login With Google</p>
      </div>
    </div>
    <div className="thirdParty flex items-center bg-gray-300 p-3 rounded-md cursor-pointer hover:bg-gray-400">
      <div className="icon text-gray-900">
        <GitHubIcon />
      </div>
      <div className="iconText ml-4">
        <p className="text-lg font-semibold">Login With GitHub</p>
      </div>
    </div>
  </div>
  <div className="text-with-lines mb-6">
    <span className="block text-lg font-bold text-green-800 text-center">OR</span>
  </div>
  <form className="login-form w-full">
    <div className="form-group mb-4">
      <label htmlFor="username" className="block text-md font-bold text-green-800">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border-2 rounded-lg bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
    <div className="form-group mb-4">
      <label htmlFor="password" className="block text-md font-bold text-green-800">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border-2 rounded-lg bg-green-100 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
    <button
      onClick={handleSubmit}
      type="submit"
      className="submit-btn w-full bg-green-700 text-yellow-200 font-extrabold py-2 rounded-lg tracking-wider hover:bg-green-800">
      LOGIN
    </button>
  </form>
  <a href="/forgot-password" className="forgot-password text-green-900 font-bold hover:text-green-700 mt-4">
    Forgot Password?
  </a>
  <Link to="/signup" className="mt-2 text-green-900 font-bold hover:text-green-700">
    New here? Sign Up
  </Link>
</div>

  );
};
