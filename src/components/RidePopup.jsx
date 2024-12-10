import React from "react";

const RidePopup = ({ setRidePopupPanel, setConfirmRidePopupPanel }) => {
  return (
    <>
      <i
        onClick={() => setRidePopupPanel(false)}
        className="ri-arrow-down-wide-line text-2xl text-zinc-400 text-center w-full inline-block"
      ></i>
      <h4 className="text-2xl font-semibold mb-3">New Ride Available !</h4>
      <div className="flex items-center justify-between bg-yellow-400 py-2 px-2 rounded-xl">
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
          <div className="flex gap-2">
            <button
              onClick={() => setRidePopupPanel(false)}
              className="w-full px-4 py-2 rounded-md font-semibold text-black mt-5 bg-zinc-300"
            >
              Ignore
            </button>
            <button
              onClick={() => setConfirmRidePopupPanel(true)}
              className="w-full px-4 py-2 rounded-md font-semibold text-white mt-5 bg-green-600"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RidePopup;
