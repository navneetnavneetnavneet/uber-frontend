import React, { useContext, useState } from "react";
import uberlogo from "/uber_logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { captainContext } from "../context/CaptainContext";

const CaptainSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(captainContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/captain-home");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
    setVehicleCapacity("");
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
          <div className="w-full">
            <label htmlFor="vehicle">Vehicle Information</label>
            <div className="w-full flex flex-wrap justify-between gap-y-5">
              <input
                onChange={(e) => setVehicleColor(e.target.value)}
                value={vehicleColor}
                type="text"
                placeholder="Vehicle Color"
                className="w-[48%] px-4 py-2 rounded-md bg-[#eeee] outline-none border border-zinc-400"
              />
              <input
                onChange={(e) => setVehiclePlate(e.target.value)}
                value={vehiclePlate}
                type="text"
                placeholder="Vehicle Plate"
                className="w-[48%] px-4 py-2 rounded-md bg-[#eeee] outline-none border border-zinc-400"
              />
              <input
                onChange={(e) => setVehicleCapacity(e.target.value)}
                value={vehicleCapacity}
                type="number"
                placeholder="Vehicle Capacity"
                className="w-[48%] px-4 py-2 rounded-md bg-[#eeee] outline-none border border-zinc-400"
              />
              <select
                onChange={(e) => setVehicleType(e.target.value)}
                value={vehicleType}
                className="w-[48%] px-4 py-2 rounded-md bg-[#eeee] outline-none border border-zinc-400"
              >
                <option value="" disabled>
                  Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>
          </div>
          <button className="w-full px-4 py-2 rounded-md bg-black text-white border-none">
            Create Captain Account
          </button>
        </form>
        <p className="text-sm w-full text-center mt-5 font-medium">
          Already have an account ?{" "}
          <Link to="/captain-login" className="text-blue-600">
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

export default CaptainSignUp;
