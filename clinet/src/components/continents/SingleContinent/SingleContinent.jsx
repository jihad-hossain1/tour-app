import { Link } from "react-router-dom";

const SingleContinent = ({ continent }) => {
  return (
    <Link
      to={`/continent/${continent?.id}`}
      style={{ backgroundImage: `url(${continent?.img})` }}
      className="hover:translate-x-1 hover:-translate-y-1 bg-no-repeat bg-cover h-full w-full p-20 hover:bg-orange-200/25 rounded hover:shadow-[3px_5px_34px_rgba(0,0,0,0.25)] shadow-[1px_2px_24px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out"
    >
      <div className=" flex items-center flex-col md:flex-row gap-4 w-fit px-2">
        <h2 className="font-semibold text-2xl text-white ">
          {continent?.name}
        </h2>
        <h4 className="text-orange-500">{continent?.code}</h4>
      </div>
    </Link>
  );
};

export default SingleContinent;
