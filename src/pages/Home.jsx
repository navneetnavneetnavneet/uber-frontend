import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SearchPanelLocation from "../components/SearchPanelLocation";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const [vehicleFoundPanelOpen, setVehicleFoundPanelOpen] = useState(false);
  const [waitingForDriverPanelOpen, setWaitingForDriverPanelOpen] =
    useState(false);

  const panelRef = useRef(null);
  const panelCloseIconRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundPanelRef = useRef(null);
  const waitingForDriverPanelRef = useRef(null);

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
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePanelOpen) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanelOpen]
  );

  useGSAP(
    function () {
      if (vehicleFoundPanelOpen) {
        gsap.to(vehicleFoundPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(vehicleFoundPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFoundPanelOpen]
  );

  useGSAP(
    function () {
      if (waitingForDriverPanelOpen) {
        gsap.to(waitingForDriverPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(waitingForDriverPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriverPanelOpen]
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
        } w-full bg-white px-4 py-4 fixed bottom-0 left-0 translate-y-full`}
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className={`${
          !confirmRidePanelOpen ? "rounded-none" : "rounded-t-2xl"
        } w-full bg-white px-4 py-4 fixed bottom-0 left-0 translate-y-full`}
      >
        <ConfirmRidePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setVehicleFoundPanelOpen={setVehicleFoundPanelOpen}
        />
      </div>
      <div
        ref={vehicleFoundPanelRef}
        className={`${
          !vehicleFoundPanelOpen ? "rounded-none" : "rounded-t-2xl"
        } w-full bg-white px-4 py-4 fixed bottom-0 left-0 translate-y-full`}
      >
        <LookingForDriver setVehicleFoundPanelOpen={setVehicleFoundPanelOpen} />
      </div>
      <div
        ref={waitingForDriverPanelRef}
        className={`${
          !waitingForDriverPanelOpen ? "rounded-none" : "rounded-t-2xl"
        } w-full bg-white px-4 py-4 fixed bottom-0 left-0 translate-y-full`}
      >
        <WaitingForDriver
          setWaitingForDriverPanelOpen={setWaitingForDriverPanelOpen}
        />
      </div>
    </div>
  );
};

export default Home;
