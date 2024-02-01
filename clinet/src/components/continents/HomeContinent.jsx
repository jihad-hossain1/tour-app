import { useQuery } from "@apollo/client";
import { GET_CONTINETS } from "../../queries/continentQuery";
import SingleContinent from "./SingleContinent/SingleContinent";
import { useState } from "react";
import Loading from "../Loading/Loading";
import Title from "../Title/Title";

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
      <Title firstText="Tour By" secondText="Continents" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.continents?.map((continent, _i) => (
          <SingleContinent key={_i} index={_i} continent={continent} />
        ))}
      </div>
    </div>
  );
};

export default HomeContinent;
