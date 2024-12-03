import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectedWapper = ({ children }) => {
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <>{children}</>;
};

export default UserProtectedWapper;
