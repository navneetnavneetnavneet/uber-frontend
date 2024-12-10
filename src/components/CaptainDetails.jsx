import React from "react";

const CaptainDetails = () => {
  return (
    <>
      <div className="flex items-center justify-between">
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
          <h2 className="text-xl font-semibold leading-none">$295</h2>
          <h6 className="text-sm text-zinc-600 leading-none">Earned</h6>
        </div>
      </div>
      <div className="bg-zinc-200 mt-5 px-4 py-4 rounded-md flex items-center justify-evenly">
        <div className="text-center">
          <i className="ri-time-line text-3xl font-thin"></i>
          <h2 className="text-xl font-semibold leading-none">10.2</h2>
          <h6 className="text-sm mt-1 text-zinc-600 leading-none">
            Hours Online
          </h6>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-line text-3xl font-thin"></i>
          <h2 className="text-xl font-semibold leading-none">10.2</h2>
          <h6 className="text-sm mt-1 text-zinc-600 leading-none">
            Hours Online
          </h6>
        </div>
        <div className="text-center">
          <i className="ri-booklet-line text-3xl font-thin"></i>
          <h2 className="text-xl font-semibold leading-none">10.2</h2>
          <h6 className="text-sm mt-1 text-zinc-600 leading-none">
            Hours Online
          </h6>
        </div>
      </div>
    </>
  );
};

export default CaptainDetails;
