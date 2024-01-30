import React, { useState } from "react";
import { getClient } from "../../../router/ClientRoute";
import { useQuery } from "@apollo/client";
import { GET_CLIENT } from "../../../queries/clientsQuery";
import TourGuideProfileForm from "./action/TourGuideProfileForm";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const TourGuide = () => {
  const [isClient, setClient] = useState(getClient());

  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id: isClient?.id },
  });

  const clientProfile = data?.client?.clientProfile;
  return (
    <>
      {/* add tour guide profile  */}
      <TourGuideProfileForm userData={data} cid={isClient?.id} />

      {loading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <div className="flex flex-col gap-3">
          <Link to={`/dashboard/tourguide/profile-update/${data?.client?.id}`}>
            <Button variant="outlined" color="success">
              Profile Update
            </Button>
          </Link>
          <img
            src={clientProfile?.profileImage}
            alt=""
            className="rounded-md object-cover max-h-96 w-full"
          />
          <h4>
            <span className="font-semibold">Full Name:</span>{" "}
            {data?.client?.name}
          </h4>
          <h4>
            <span className="font-semibold">Phone:</span> {data?.client?.phone}
          </h4>
          <h4>
            <span className="font-semibold">Email:</span> {data?.client?.email}
          </h4>
          <h4>
            <span className="font-semibold">User Type:</span>{" "}
            {data?.client?.clientType}
          </h4>
          <h4>
            <span className="font-semibold">User Role:</span>{" "}
            {data?.client?.role}
          </h4>
          <p>
            <span className="font-semibold">Tour Type:</span>{" "}
            {clientProfile?.tourGuideInstructionType}
          </p>
          <p>
            <span className="font-semibold">Tour Member:</span> Up to{" "}
            {clientProfile?.uptoPeople} people
          </p>
          <p>
            <span className="font-semibold">Language:</span>{" "}
            {clientProfile?.languages}
          </p>
          <p>
            <span className="font-semibold">Response Time:</span>{" "}
            {clientProfile?.responseTime} hours 30 min
          </p>
          <p>
            <span className="font-semibold">Provide Location:</span>{" "}
            {clientProfile?.city?.name}
          </p>
          <p>
            <span className="font-semibold">About:</span>{" "}
            {clientProfile?.description}
          </p>
        </div>
      )}
    </>
  );
};

export default TourGuide;
