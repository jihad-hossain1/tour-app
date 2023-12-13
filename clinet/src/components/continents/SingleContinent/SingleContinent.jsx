import { Link } from "react-router-dom";

const SingleContinent = ({ continent }) => {
  return (
    <Link
      to={`/continent/${continent?.id}`}
      className="p-10 flex items-center gap-4 bg-orange-200/25 rounded shadow-[3px_5px_34px_rgba(0,0,0,0.25)]"
    >
      <h2 className="font-semibold text-2xl">{continent?.name}</h2>
      <h4 className="text-orange-500">{continent?.code}</h4>
    </Link>
  );
};

export default SingleContinent;
