import React from "react";

const SingleCountry = ({ country, cId }) => {
  let { countries } = country;
  let _filtr = countries?.flat((item) => item);
  console.log(_filtr);

  return (
    <div>
      {countries?.map((item, _i) => (
        <div key={_i}>{item?.name}</div>
      ))}
    </div>
  );
};

export default SingleCountry;
