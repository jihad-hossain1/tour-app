import React from "react";
import { GET_CONTINETS_MANAGEMENTS } from "../../../queries/continentQuery";
import { useQuery } from "@apollo/client";
import Loading from "../../../components/Loading/Loading";
import { TbWorld, TbWorldCog } from "react-icons/tb";
import { MdTour } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import AddContinent from "./AddContinent";
import Action from "./Action/Action";

const ManageContinents = () => {
  const { data, loading, error } = useQuery(GET_CONTINETS_MANAGEMENTS);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    <div>{error?.message}</div>;
  }
  const countries = data?.continents?.flatMap((country) => country?.countries);
  const _div = countries.flatMap((item) => item?.division);
  const _tour = _div?.flatMap((item) => item?.cities);
  const _finalTotalTourspot = _tour?.flatMap((item) => item?.touristSpots);

  return (
    <div>
      <AddContinent />
      <h5 className="text-center py-4 text-2xl">ManageContinents</h5>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
        <Card
          title="Total Continents"
          subtitle={(!loading && !error && data?.continents?.length) || 0}
          href="#"
          Icon={TbWorld}
        />
        <Card
          title="Total Countries"
          subtitle={(!loading && !error && countries?.length) || 0}
          href="#"
          Icon={TbWorldCog}
        />

        <Card
          title="Total Division"
          subtitle={(!loading && !error && _div?.length) || 0}
          href="#"
          Icon={MdAccountBalance}
        />
        <Card
          title="Total TourSpot"
          subtitle={(!loading && !error && _finalTotalTourspot?.length) || 0}
          href="#"
          Icon={MdTour}
        />
      </div>
      <Action continents={data?.continents} loading={loading} />
    </div>
  );
};

const Card = ({ children, title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-5xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200  z-0 duration-300 text-3xl relative">
        {subtitle}
      </p>
    </a>
  );
};

export default ManageContinents;
