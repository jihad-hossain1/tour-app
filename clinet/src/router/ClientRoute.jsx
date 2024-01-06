import { Navigate } from "react-router-dom";
import { useState } from "react";
import { GET_CLIENT } from "../queries/clientsQuery";
import { useQuery } from "@apollo/client";

export function getClient() {
  let client = localStorage.getItem("client");
  // const _id = client?._id;

  // console.log(_id);
  // client = JSON.parse(client);

  // console.log(client);
  if (client) {
    client = JSON.parse(client);
    // console.log(client);

    // const { loading, error, data } = useQuery(GET_CLIENT, {
    //   variables: { id: client?.id },
    // });
    // loading ? <div>Loading</div> : "";
    // client = data?.client;
    // console.log(client);
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
