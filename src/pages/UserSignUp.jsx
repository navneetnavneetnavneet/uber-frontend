import React, { useContext, useState } from "react";
import uberlogo from "/uber_logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../context/UserContext";

const UserSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      userData
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      navigate("/home");
    }

    setFirstName("");
    setLastName("");
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
          <div className="flex gap-5">
            <div className="w-1/2">
              <label htmlFor="firstName">First name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2 rounded-md bg-[#eeee] outline-none border border-zinc-400"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName">Last name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-2 rounded-md bg-[#eeee] outline-none border border-zinc-400"
              />
            </div>
          </div>
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
            Create Account
          </button>
        </form>
        <p className="text-sm w-full text-center mt-5 font-medium">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <p className="text-xs text-center">
        Protect your personal data avoid sharing sensitive information online.
        Use strong passwords, enable two-factor authentication, and stay
        cautious of scams.
      </p>
    </div>
  );
};

export default UserSignUp;
