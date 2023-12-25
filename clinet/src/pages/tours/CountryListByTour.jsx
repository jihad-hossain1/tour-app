import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_COUNTRY_TOURSPOT_LIST } from "../../queries/toursQuery";
import { Container } from "@mui/material";
import Loading from "../../components/Loading/Loading";

const CountryListByTour = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_COUNTRY_TOURSPOT_LIST, {
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
    <Container maxWidth={"xl"} className="pt-28">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {!loading &&
          !error &&
          data?.singleCountryTourspotList?.map((item) => (
            <div className="flex flex-col gap-4 card" key={item?.id}>
              <h4>{item?.name}</h4>
              <div className="flex justify-end">
                <Link
                  to={`/singleToursportDetails/${item?.id}`}
                  className="clink"
                >
                  show details
                </Link>
              </div>
            </div>
          ))}
      </section>
    </Container>
  );
};

export default CountryListByTour;
