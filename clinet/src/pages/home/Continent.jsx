import { useParams } from "react-router-dom";
import { GET_CONTINET } from "../../queries/continentQuery";
import { useQuery } from "@apollo/client";
import SingleCountry from "../../components/countries/SingleCountry/SingleCountry";
import { Container } from "@mui/material";
import Loading from "../../components/Loading/Loading";

const Continent = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CONTINET, {
    variables: { id },
  });

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
    <Container maxWidth={"xl"} className="pt-16 min-h-[70vh]">
      <div className="text-center py-4">
        Total-country: {data?.singleContinent?.length}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {data?.singleContinent?.map((country, _i) => (
          <SingleCountry key={_i} cId={id} country={country} />
        ))}
      </div>
    </Container>
  );
};

export default Continent;
