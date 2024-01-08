import React, { useState } from "react";
import { getClient } from "./ClientRoute";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [isClient, setClient] = useState(getClient());
  const clientRole = isClient?.role == "admin";
  if (!clientRole) {
    return <Navigate to={`/denied`} />;
  }
  if (clientRole) {
    return children;
  }
  return children;
};

export default AdminRoute;
