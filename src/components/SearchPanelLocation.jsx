import React from "react";

const SearchPanelLocation = ({ setVehiclePanelOpen, setPanelOpen }) => {
  const locations = [
    {
      id: 1,
      name: "Kapoors Cafe Near Chai Shutta Bar",
      address: "20B",
      city: "Bhopal",
      state: "Madhya Pradesh",
      country: "India",
    },
    {
      id: 2,
      name: "Marine Drive",
      address: "Netaji Subhash Chandra Bose Road",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    {
      id: 3,
      name: "India Gate",
      address: "Rajpath Marg",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
    },
    {
      id: 4,
      name: "Charminar",
      address: "Pathar Gatti",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
    },
  ];

  return (
    <div className="w-full h-full">
      {locations.length > 0
        ? locations.map((location, idx) => (
            <div
              onClick={() => {
                setVehiclePanelOpen(true);
                setPanelOpen(false);
              }}
              key={idx}
              className="w-full h-[15%] flex items-center justify-start gap-2 px-4 py-2"
            >
              <div className="w-12 h-10 bg-[#eeee] rounded-full flex items-center justify-center">
                <i className="ri-map-pin-fill text-lg"></i>
              </div>
              <h3 className="text-lg font-medium leading-tight w-[95%]">
                {location.address}, {location.name}, {location.city}
              </h3>
            </div>
          ))
        : ""}
    </div>
  );
};

export default SearchPanelLocation;
