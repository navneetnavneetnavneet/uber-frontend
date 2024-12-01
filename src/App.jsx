import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </>
  );
};

export default App;
