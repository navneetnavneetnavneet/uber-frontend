import React from "react";

const VehiclePanel = ({ setVehiclePanelOpen, setConfirmRidePanelOpen }) => {
  return (
    <>
      <i
        onClick={() => setVehiclePanelOpen(false)}
        className="ri-arrow-down-wide-line text-2xl text-zinc-400 text-center w-full inline-block"
      ></i>
      <h4 className="text-2xl font-semibold mb-3">Choose a Vehicle.</h4>
      <div
        onClick={() => setConfirmRidePanelOpen(true)}
        className="w-full bg-white px-2 py-4 border-2 active:border-black rounded-md mb-2 flex items-center justify-between gap-2"
      >
        <img
          className="w-20 h-12 object-cover"
          src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
          alt=""
        />
        <div className="w-2/3">
          <h2 className="text-lg font-semibold leading-none">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h2>
          <h4 className="text-sm font-medium">3 min away</h4>
          <h4 className="text-xs font-medium text-zinc-600">
            Affordable, Compact rides
          </h4>
        </div>
        <h1 className="text-xl font-medium">$193.40</h1>
      </div>
      <div
        onClick={() => setConfirmRidePanelOpen(true)}
        className="w-full bg-white px-2 py-4 border-2 active:border-black rounded-md mb-2 flex items-center justify-between gap-2"
      >
        <img
          className="w-20 h-12 object-cover"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-2/3">
          <h2 className="text-lg font-semibold leading-none">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h2>
          <h4 className="text-sm font-medium">3 min away</h4>
          <h4 className="text-xs font-medium text-zinc-600">
            Affordable, motorcycle rides
          </h4>
        </div>
        <h1 className="text-xl font-medium">$65.13</h1>
      </div>
      <div
        onClick={() => setConfirmRidePanelOpen(true)}
        className="w-full bg-white px-2 py-4 border-2 active:border-black rounded-md mb-2 flex items-center justify-between gap-2"
      >
        <img
          className="w-20 h-12 object-cover"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-2/3">
          <h2 className="text-lg font-semibold leading-none">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>2
            </span>
          </h2>
          <h4 className="text-sm font-medium">3 min away</h4>
          <h4 className="text-xs font-medium text-zinc-600">
            Affordable, auto rides
          </h4>
        </div>
        <h1 className="text-xl font-medium">$123.03</h1>
      </div>
    </>
  );
};

export default VehiclePanel;
