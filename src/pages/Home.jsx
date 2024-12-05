import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SearchPanelLocation from "../components/SearchPanelLocation";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);

  const panelRef = useRef(null);
  const panelCloseIconRef = useRef(null);
  const vehiclePanelRef = useRef(null);

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          display: "flex",
        });
        gsap.to(panelCloseIconRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          display: "none",
        });
        gsap.to(panelCloseIconRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0%)",
          display: "flex",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
          display: "none",
        });
      }
    },
    [vehiclePanelOpen]
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      pickup,
      destination,
    };

    console.log(data);

    setPickup("");
    setDestination("");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-end overflow-hidden">
      <img
        className="w-full h-full z-[-1] object-cover absolute top-0 left-0"
        src="https://live.staticflickr.com/65535/53225229084_65a70c432f_o.jpg"
        alt=""
      />
      <div
        className={`${
          panelOpen ? "rounded-none" : "rounded-t-2xl"
        } w-full h-[35%] bg-white px-4 py-4`}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-semibold">Find a trip.</h4>
          <i
            onClick={() => setPanelOpen(false)}
            ref={panelCloseIconRef}
            className="ri-arrow-down-wide-line text-2xl opacity-0"
          ></i>
        </div>
        <form
          onSubmit={submitHandler}
          className="w-full relative flex flex-col gap-3 mt-3 font-medium text-lg"
        >
          <div className="absolute left-4 top-4 flex flex-col items-center">
            <i className="ri-circle-fill text-xs"></i>
            <div className="w-1 h-10 rounded-full bg-black"></div>
            <i className="ri-circle-fill text-xs"></i>
          </div>
          <input
            onClick={() => setPanelOpen(true)}
            onChange={(e) => setPickup(e.target.value)}
            value={pickup}
            type="text"
            placeholder="Add a pick-up vehiclePanelOpen"
            className="w-full px-10 py-2 rounded-md outline-none border border-zinc-400"
          />
          <input
            onClick={() => setPanelOpen(true)}
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
            type="text"
            placeholder="Enter Your destination"
            className="w-full px-10 py-2 rounded-md outline-none border border-zinc-400"
          />
          <button className="w-fit px-4 py-1 rounded-md bg-black text-white">
            Done
          </button>
        </form>
      </div>
      <div ref={panelRef} className="w-full h-[0%] hidden bg-white">
        <SearchPanelLocation
          setVehiclePanelOpen={setVehiclePanelOpen}
          setPanelOpen={setPanelOpen}
        />
      </div>
      <div
        ref={vehiclePanelRef}
        className={`${
          !vehiclePanelOpen ? "rounded-none" : "rounded-t-2xl"
        } w-full bg-white px-4 py-4 hidden flex-col absolute bottom-0 left-0 translate-y-full`}
      >
        <i
          onClick={() => setVehiclePanelOpen(false)}
          className="ri-arrow-down-wide-line text-2xl text-zinc-400 text-center w-full inline-block"
        ></i>
        <h4 className="text-2xl font-semibold mb-3">Choose a Vehicle.</h4>
        <div className="w-full bg-white px-2 py-4 border-2 active:border-black rounded-md mb-2 flex items-center justify-between gap-2">
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
        <div className="w-full bg-white px-2 py-4 border-2 active:border-black rounded-md mb-2 flex items-center justify-between gap-2">
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
        <div className="w-full bg-white px-2 py-4 border-2 active:border-black rounded-md mb-2 flex items-center justify-between gap-2">
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
      </div>
    </div>
  );
};

export default Home;
