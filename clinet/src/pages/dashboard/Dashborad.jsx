import { useState } from "react";
import { getClient } from "../../router/ClientRoute";
import Information from "../../components/Information";
import TourGuide from "./TourGuide/TourGuide";

const Dashborad = () => {
  const [isClient, setClient] = useState(getClient());

  const manageTourist =
    isClient?.clientType == "TourGuide" || isClient?.role == "admin";
  return <>{manageTourist ? <TourGuide /> : <Information />}</>;
};

export default Dashborad;
