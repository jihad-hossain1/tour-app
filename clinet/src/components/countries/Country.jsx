import React from "react";
import { useParams } from "react-router-dom";
import Destination from "../../pages/Destination/Destination";
const Country = () => {
  const paramId = useParams();
  console.log(paramId?.id);

  return (
    <div>
      <Destination />
    </div>
  );
};

export default Country;
