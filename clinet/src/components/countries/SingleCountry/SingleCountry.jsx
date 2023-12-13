import React from "react";

const SingleCountry = ({ country }) => {
  return (
    <div>
      <h4>{country?.name}</h4>
    </div>
  );
};

export default SingleCountry;
