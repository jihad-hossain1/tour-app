import { useParams } from "react-router-dom";
import { GET_CONTINET } from "../../queries/continentQuery";
import { useQuery } from "@apollo/client";
import SingleCountry from "../../components/countries/SingleCountry/SingleCountry";

const Continent = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CONTINET, {
    variables: { id },
  });
  const { continents } = data;
  // console.log(data);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  // let { continents } = data;
  // const _cn = continents?.map((item) => item?.countries);
  // console.log(_cn);
  return (
    <div>
      <div>
        {continents?.map((country, _i) => (
          <SingleCountry key={_i} cId={id} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Continent;
