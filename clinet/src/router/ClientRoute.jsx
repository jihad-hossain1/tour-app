import { Navigate } from "react-router-dom";
import { useState } from "react";

export function getClient() {
  let client = localStorage.getItem("client");
  if (client) {
    client = JSON.parse(client);
  } else {
    client = null;
  }
  return client;
}

const ClientPrivateRoute = ({ children }) => {
  const [isClient, setClient] = useState(getClient());
  if (!isClient) {
    return <Navigate to={`/signin`} />;
  }
  if (isClient) {
    return children;
  }
  return children;
};

export default ClientPrivateRoute;
