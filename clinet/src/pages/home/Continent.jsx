import { useParams } from "react-router-dom";
import { GET_CONTINET } from "../../queries/continentQuery";
import { useQuery } from "@apollo/client";
import SingleCountry from "../../components/countries/SingleCountry/SingleCountry";

const Continent = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CONTINET, {
    variables: { id },
  });
  console.log(data);
  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <div>
        {data?.countries?.map((country, _i) => (
          <SingleCountry key={_i} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Continent;
