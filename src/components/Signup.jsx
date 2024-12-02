import "./styles/Signup.css";

import { useState } from "react";

export const Signup = () => {
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
    console.log(formData);
    e.preventDefault();
    setFormData(() => ({
      username: "",
      password: "",
    }));
  };

  return (
    <div id="signupPage">
      <div id="signupTitle">
        <p>Sign Up</p>
      </div>
      <form className="signup-form">
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
    </div>
  );
};