import React, { useRef, useState } from "react";
import uberlogo from "/uber_logo.png";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <div className="w-full h-screen">
      <div className="w-full fixed top-0 left-0 flex items-center justify-between px-4 py-4">
        <img src={uberlogo} className="w-20"></img>
        <Link
          to=""
          className="w-10 h-10 flex items-center justify-center bg-white rounded-full"
        >
          <i className="ri-logout-box-line text-xl"></i>
        </Link>
      </div>
      <div className="w-full h-[65%]">
        <img
          className="w-full h-full object-cover"
          src="https://live.staticflickr.com/65535/53225229084_65a70c432f_o.jpg"
          alt=""
        />
      </div>
      <div className="w-full h-[35%] bg-white rounded-t-xl px-4 py-4">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopupPanelRef}
        className={`${
          ridePopupPanel ? "rounded-none" : "rounded-t-2xl"
        } w-full bg-white px-4 py-4 fixed bottom-0 left-0 translate-y-full`}
      >
        <RidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
      <div
        ref={confirmRidePopupPanelRef}
        className={`w-full h-screen bg-white px-4 py-4 fixed bottom-0 left-0 translate-y-full`}
      >
        <ConfirmRidePopup
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
