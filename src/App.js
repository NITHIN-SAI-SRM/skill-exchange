import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
import Login from "./components/Login/Signup/Login";
import SkillMapping from "./components/SkillMaping/SkillMapping";
import SignupPage from "./components/signuppage/SignupPage";
import Events from "./components/Events/Events";
import AboutUs from "./components/AboutUs/AboutUs";
import MentorShipSession from "./components/MentorshipSessions/MentorshipSessions";
import Header from "./components/Header";
import Details from "./components/Details";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SkillMapping" element={<SkillMapping />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/MentorShipSession" element={<MentorShipSession />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
