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
    <div id="signupPage" className="max-w-lg mx-auto p-4">
  <div id="signupTitle" className="text-center mb-6">
    <p className="text-2xl font-semibold">Sign Up</p>
  </div>
  <form className="signup-form space-y-4">
    <div className="form-group">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="form-group">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button
      onClick={handleSubmit}
      type="submit"
      className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit
    </button>
  </form>
</div>

  );
};