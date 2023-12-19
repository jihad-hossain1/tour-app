import { useQuery } from "@apollo/client";
import { GET_CONTINETS } from "../../queries/continentQuery";
import SingleContinent from "./SingleContinent/SingleContinent";
import { Container } from "@mui/material";

const HomeContinent = () => {
  const { loading, error, data } = useQuery(GET_CONTINETS);

  if (loading) {
    return <div>Loadnig......</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Container className="mt-20" maxWidth="xl">
      <h4 className="text-center my-16 font-bold text-3xl md:text-5xl ">
        Top destinations
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3  md:gap-7 gap-5 ">
        {data?.continents?.map((continent, _i) => (
          <SingleContinent key={_i} continent={continent} />
        ))}
      </div>
    </Container>
  );
};

export default HomeContinent;
