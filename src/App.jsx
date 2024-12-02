import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Profile } from "./components/Profile";
// import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    // <UserContextProvider>
      <Router>
        <Routes>
          {/* currently it is home route */}
          <Route path="/" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    // </UserContextProvider>
  );
};

export default App;
