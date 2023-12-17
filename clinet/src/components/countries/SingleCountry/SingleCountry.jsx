import React from "react";
import { Link } from "react-router-dom";

const SingleCountry = ({ country }) => {
  return (
    <div>
      <Link
        to={`/countryListByTour/${country?.id}`}
        className="hover:underline"
      >
        {country?.name}
      </Link>
    </div>
  );
};

export default SingleCountry;
