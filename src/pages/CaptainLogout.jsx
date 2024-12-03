import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const token = JSON.stringify(localStorage.getItem("token"));
  const navigate = useNavigate();

  axios
    .get(`/capatins/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    });

  return <div>CaptainLogout</div>;
};

export default CaptainLogout;
