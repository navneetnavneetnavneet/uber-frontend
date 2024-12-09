import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="w-full h-screen">
      <Link
        to="/home"
        className="w-10 h-10 fixed top-2 right-2 flex items-center justify-center bg-white rounded-full"
      >
        <i className="ri-home-5-line text-xl"></i>
      </Link>
      <div className="w-full h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://live.staticflickr.com/65535/53225229084_65a70c432f_o.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-5 px-4">
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
        <button className="w-full px-4 py-2 rounded-md font-semibold text-white mt-5 bg-green-600">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
