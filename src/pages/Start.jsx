import React from "react";
import uberlogo from "/uber_logo.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1706214630848-0fda60b8e4ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex flex-col justify-between"
    >
      <img src={uberlogo} className="w-20 ml-8 mt-8 "></img>
      <div className="bg-white px-8 py-4 flex flex-col gap-5">
        <h1 className="text-3xl font-bold tracking-tight leading-none">
          Get started with Uber
        </h1>
        <Link to="/login" className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-black text-white">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
