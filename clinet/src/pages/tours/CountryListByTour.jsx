import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_COUNTRY_TOURSPOT_LIST } from "../../queries/toursQuery";
import { Container } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import { Card, CardActionArea } from "@mui/material";
import { HiOutlineMapPin } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";

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
    return <div>{error?.message}</div>;
  }

  return (
    <Container maxWidth={"xl"} className="min-h-[70vh]">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {!loading &&
          !error &&
          data?.singleCountryTourspotList?.map((item) => (
            <div className="" key={item?.id}>
              <Card className=" h-96 relative overflow-hidden">
                <Link to={`/singleToursportDetails/${item?.id}`}>
                  <CardActionArea
                    style={{
                      backgroundImage: `url(${item?.photo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "200px",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </Link>
                <div className="p-2 mt-2 flex flex-col gap-2">
                  <div className="w-fit flex items-center gap-2 bg-zinc-100 px-2 rounded-sm py-[2px] shadow-sm">
                    <HiOutlineMapPin className="text-gray-500" />
                    <p className="text-zinc-900 text-sm">{item?.city?.name}</p>
                  </div>
                  <Link
                    to={`/singleToursportDetails/${item?.id}`}
                    className=" font-semibold hover:text-blue-600 transition duration-300"
                  >
                    {item?.name}
                  </Link>
                  <div className="w-fit flex gap-2 items-center">
                    <div className="flex  items-center">
                      <TiStarFullOutline className="text-yellow-500" />
                      <span>{5}</span>
                    </div>
                    <div className="text-gray-500 text-sm">{`(${4} Reviews)`}</div>
                  </div>
                </div>
                <hr className="h-[1px] m-2" />
                <p className="text-xs text-gray-600 p-2">
                  {`${item?.description?.slice(0, 80)}...`}
                </p>
              </Card>
            </div>
          ))}
      </section>
    </Container>
  );
};

export default CountryListByTour;
