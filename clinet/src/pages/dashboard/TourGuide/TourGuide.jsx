import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { getClient } from "../../../router/ClientRoute";
import { useQuery } from "@apollo/client";
import { GET_CLIENT } from "../../../queries/clientsQuery";
import UpdateTourGuideProfile from "./UpdateTourGuideProfile";

const TourGuide = () => {
  const [isClient, setClient] = useState(getClient());

  const cid = isClient?.id;

  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: cid },
  });
  // console.log(data?.client);

  return (
    <>
      <UpdateTourGuideProfile cid={cid} />
    </>
  );
};

export default TourGuide;
