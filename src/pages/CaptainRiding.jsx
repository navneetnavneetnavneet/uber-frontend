import React, { useRef, useState } from "react";
import uberlogo from "/uber_logo.png";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePopupPanel, setFinishRidePopupPanel] = useState(false);

  const finishRidePopupPanelRef = useRef();

  useGSAP(
    function () {
      if (finishRidePopupPanel) {
        gsap.to(finishRidePopupPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(finishRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePopupPanel]
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
      <div className="w-full h-[80%]">
        <img
          className="w-full h-full object-cover"
          src="https://live.staticflickr.com/65535/53225229084_65a70c432f_o.jpg"
          alt=""
        />
      </div>
      <div className="w-full h-[20%] bg-yellow-400 px-4 py-4">
        <i className="ri-arrow-up-wide-line text-2xl text-zinc-900 text-center w-full inline-block"></i>
        <div className="w-full flex items-center justify-between mt-5">
          <h1 className="w-1/2 text-2xl font-medium">4.2 KM away</h1>
          <button
            onClick={() => setFinishRidePopupPanel(true)}
            className="w-1/2 px-4 py-2 rounded-md font-semibold text-white bg-green-600"
          >
            Complete
          </button>
        </div>
      </div>
      <div
        ref={finishRidePopupPanelRef}
        className={`${
          !finishRidePopupPanel ? "rounded-none" : "rounded-t-2xl"
        } w-full bg-white px-4 py-4 fixed bottom-0 left-0 translate-y-full`}
      >
        <FinishRide setFinishRidePopupPanel={setFinishRidePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
