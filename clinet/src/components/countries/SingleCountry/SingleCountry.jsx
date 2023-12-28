import React from "react";
import { Link } from "react-router-dom";
import { TbWorld, TbWorldCog } from "react-icons/tb";

const SingleCountry = ({ country }) => {
  return (
    <>
      <Link
        to={`/countryListByTour/${country?.id}`}
        className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

        <TbWorld className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
        <TbWorldCog className="mb-2 text-5xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
        <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {country?.name}
        </h3>
        {/* <p className="text-slate-400 group-hover:text-violet-200  z-0 duration-300 text-3xl relative">
          {"subtitle"}
        </p> */}
      </Link>
    </>
  );
};

export default SingleCountry;
