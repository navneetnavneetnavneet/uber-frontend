import React, { useContext, useState } from "react";
import uberlogo from "/uber_logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { captainContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(captainContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = { email, password };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between px-4 py-8">
      <div>
        <img src={uberlogo} className="w-20"></img>
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-5 mt-5 text-lg font-medium"
        >
          <div>
            <label htmlFor="email">What's your email ?</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-md bg-[#eeee] outline-none border border-zinc-400"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-md bg-[#eeee] outline-none border border-zinc-400"
            />
          </div>
          <button className="w-full px-4 py-2 rounded-md bg-black text-white border-none">
            Login
          </button>
        </form>
        <p className="text-sm w-full text-center mt-5 font-medium">
          Don't have an account ?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <Link
        to="/login"
        className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-[#B36800] text-white font-medium border-none "
      >
        Sign in as User
      </Link>
    </div>
  );
};

export default CaptainLogin;
