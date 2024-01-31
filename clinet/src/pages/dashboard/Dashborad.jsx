import { useState } from "react";
import { getClient } from "../../router/ClientRoute";
import Information from "../../components/Information";
import TourGuide from "./TourGuide/TourGuide";
import { GET_CLIENT } from "../../queries/clientsQuery";
import { useQuery } from "@apollo/client";

const Dashborad = () => {
  const [isClient, setClient] = useState(getClient());
  const {
    loading,
    error,
    data: userData,
  } = useQuery(GET_CLIENT, {
    variables: { id: isClient?.id },
  });

  const manageTourist =
    userData?.client?.clientType == "TourGuide" || isClient?.role == "admin";
  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : manageTourist ? (
        <TourGuide />
      ) : (
        <Information />
      )}
    </>
  );
};

export default Dashborad;
