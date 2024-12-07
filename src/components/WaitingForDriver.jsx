import React from "react";

const WaitingForDriver = ({ setWaitingForDriverPanelOpen }) => {
  return (
    <>
      <i
        onClick={() => {
          setWaitingForDriverPanelOpen(false);
        }}
        className="ri-arrow-down-wide-line text-2xl text-zinc-400 text-center w-full inline-block"
      ></i>
      <h4 className="text-2xl font-semibold mb-3">Waiting for a Driver.</h4>
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="w-full flex items-center justify-between">
          <img
            className="w-20 h-12 object-cover"
            src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
            alt=""
          />
          <div className="text-right">
            <h1 className="text-lg font-medium leading-none">Sarthak</h1>
            <h2 className="text-xl font-semibold leading-none">
              MP 04 MK 3228
            </h2>
            <h4 className="text-xs font-medium text-zinc-600">
              Maruti Suzuki Alto
            </h4>
          </div>
        </div>
        <div className="mt-5">
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
        </div>
      </div>
    </>
  );
};

export default WaitingForDriver;
