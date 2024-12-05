import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SearchPanelLocation from "../components/SearchPanelLocation";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);
  const panelCloseIconRef = useRef(null);

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

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen flex flex-col justify-end">
      <img
        className="w-full h-full z-[-1] object-cover absolute top-0 left-0"
        src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584820445-6MHFT7HI6MHUED46VYU4/Two+Maps+-+Color.png"
        alt=""
      />
      <div
        className={`${
          panelOpen ? "rounded-none" : "rounded-t-2xl"
        } w-full h-[35%] bg-white px-4 py-4`}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-3xl font-semibold">Find a trip.</h4>
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
            placeholder="Add a pick-up location"
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
        <SearchPanelLocation />
      </div>
    </div>
  );
};

export default Home;
