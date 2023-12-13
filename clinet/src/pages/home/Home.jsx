import { useQuery } from "@apollo/client";
import { GET_CONTINETS } from "../../queries/continentQuery";
import SingleContinent from "../../components/continents/SingleContinent/SingleContinent";

const Home = () => {
  const { loading, error, data } = useQuery(GET_CONTINETS);

  if (loading) {
    return <div>Loadnig......</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-7 gap-3">
        {data?.continents?.map((continent, _i) => (
          <SingleContinent key={_i} continent={continent} />
        ))}
      </div>
    </div>
  );
};

export default Home;
