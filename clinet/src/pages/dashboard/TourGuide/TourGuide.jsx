import React, { useState } from "react";
import { getClient } from "../../../router/ClientRoute";
import { useQuery } from "@apollo/client";
import { GET_CLIENT } from "../../../queries/clientsQuery";
import AddTourGuideProfile from "./AddTourGuideProfile";

const TourGuide = () => {
  const [isClient, setClient] = useState(getClient());

  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: isClient?.id },
  });

  const clientProfile = data?.client?.clientProfile;
  return (
    <>
      <AddTourGuideProfile userData={data} cid={isClient?.id} />

      {loading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <img
            src={clientProfile?.profileImage}
            alt=""
            className="rounded-md object-cover max-h-96 w-full"
          />
          <h4>Full Name: {data?.client?.name}</h4>
          <h4>Phone: {data?.client?.phone}</h4>
          <h4>email: {data?.client?.email}</h4>
          <h4>User Type: {data?.client?.clientType}</h4>
          <h4>User Role: {data?.client?.role}</h4>
          <p>Tour Type: {clientProfile?.tourGuideInstructionType}</p>
          <p>Tour Member: Up to {clientProfile?.uptoPeople} people</p>
          <p>Language: {clientProfile?.languages}</p>
          <p>Response Time: {clientProfile?.responseTime} hours 30 min</p>
          <p>Provide Location: {clientProfile?.city?.name}</p>
          <p>About: {clientProfile?.description}</p>
        </div>
      )}
    </>
  );
};

export default TourGuide;
