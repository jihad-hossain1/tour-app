import { useQuery } from "@apollo/client";
import { GET_CONTINETS } from "../../queries/continentQuery";
import SingleContinent from "./SingleContinent/SingleContinent";
import { useState } from "react";
import Loading from "../Loading/Loading";

const HomeContinent = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { loading, error, data } = useQuery(GET_CONTINETS);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="mt-6 md:mt-10  px-2">
      <div className="my-6 lg:my-10">
        <h4 className="text-3xl ">
          <span className="border-b-[3px] pb-1 border-blue-600 w-fit">
            Tour By
          </span>{" "}
          Continents
        </h4>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-7 gap-5">
        {data?.continents?.map((continent, _i) => (
          <SingleContinent key={_i} index={_i} continent={continent} />
        ))}
        {/* {data?.continents
          ?.slice(0, isToggle ? data?.continents?.length : 6)
          .map((continent, _i) => (
            <SingleContinent key={_i} index={_i} continent={continent} />
          ))} */}
      </div>
      {/* <div className="mt-5">
        {!isToggle ? (
          <button onClick={() => setIsToggle(!isToggle)}>Load more</button>
        ) : (
          <button onClick={() => setIsToggle(!isToggle)}>Show less</button>
        )}
      </div> */}
    </div>
  );
};

export default HomeContinent;
