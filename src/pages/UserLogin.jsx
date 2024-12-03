import React, { useState } from "react";
import uberlogo from "/uber_logo.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = { email, password };

    console.log(userData);

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
          <Link to="/signup" className="text-blue-600">
            Create New Account
          </Link>
        </p>
      </div>
      <Link to="/captain-login" className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-green-600 text-white font-medium border-none ">
        Sign in as Captain
      </Link>
    </div>
  );
};

export default UserLogin;
