import { useQuery } from "@apollo/client";
import { GET_CONTINETS } from "../../queries/continentQuery";
import SingleContinent from "./SingleContinent/SingleContinent";
import { Container } from "@mui/material";
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
    <div className="mt-6 md:mt-10 max-w-screen-lg mx-auto px-2">
      <h4 className="text-center my-3 md:my-16 font-bold text-3xl md:text-5xl ">
        Top Destinations
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 md:gap-7 gap-5">
        {data?.continents
          ?.slice(0, isToggle ? data?.continents?.length : 4)
          .map((continent, _i) => (
            <SingleContinent key={_i} index={_i} continent={continent} />
          ))}
      </div>
      <div className="mt-5">
        {!isToggle ? (
          <button onClick={() => setIsToggle(!isToggle)}>Load more</button>
        ) : (
          <button onClick={() => setIsToggle(!isToggle)}>Show less</button>
        )}
      </div>
    </div>
  );
};

export default HomeContinent;
