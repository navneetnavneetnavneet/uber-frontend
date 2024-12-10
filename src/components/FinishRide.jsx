import React from "react";
import { Link } from "react-router-dom";

const FinishRide = ({ setFinishRidePopupPanel }) => {
  return (
    <>
      <i
        onClick={() => setFinishRidePopupPanel(false)}
        className="ri-arrow-down-wide-line text-2xl text-zinc-400 text-center w-full inline-block"
      ></i>
      <h4 className="text-2xl font-semibold mb-3">Finish this Ride.</h4>
      <div className="flex items-center justify-between border-2 border-yellow-400 py-2 px-2 rounded-xl">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1703798278589-245f6e47cf8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
              alt=""
            />
          </div>
          <h2 className="text-xl font-semibold leading-none">Sarthak Sharma</h2>
        </div>
        <div>
          <h2 className="text-xl font-semibold leading-none">2.5 KM</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <div>
          <div className="flex items-center gap-3 py-2">
            <i className="ri-map-pin-2-fill text-xl"></i>
            <div>
              <h2 className="text-xl font-semibold">562/11-A</h2>
              <h4 className="text-xs font-medium text-zinc-600">
                Kaikondrahali, Bengaluru, Karnataka
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 py-2 border-b-2 border-t-2 ">
            <i className="ri-checkbox-blank-fill text-xl"></i>
            <div>
              <h2 className="text-xl font-semibold">Third Wave Coffee</h2>
              <h4 className="text-xs font-medium text-zinc-600">
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karnataka
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 py-2">
            <i className="ri-wallet-3-line text-xl"></i>
            <div>
              <h2 className="text-xl font-semibold">
                <i className="ri-money-rupee-circle-fill"></i>193.20
              </h2>
              <h4 className="text-xs font-medium text-zinc-600">Cash</h4>
            </div>
          </div>
          <Link
            to="/captain-home"
            className="w-full flex items-center justify-center px-4 py-2 rounded-md font-semibold text-white mt-5 bg-green-600"
          >
            Finish
          </Link>
          <p className="text-xs text-zinc-600 mt-5 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            soluta voluptate totam, eum inventore incidunt dignissimos deleniti.
            Neque, qui nostrum.
          </p>
        </div>
      </div>
    </>
  );
};

export default FinishRide;
