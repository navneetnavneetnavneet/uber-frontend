import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import Home from "./pages/Home";
import UserProtectedWapper from "./pages/UserProtectedWapper";
import UserLogout from "./pages/UserLogout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route
          path="/home"
          element={
            <UserProtectedWapper>
              <Home />
            </UserProtectedWapper>
          }
        />

        <Route path="/user-logout" element={<UserLogout />} />
      </Routes>
    </>
  );
};

export default App;
