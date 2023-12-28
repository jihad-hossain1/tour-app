import { useQuery } from "@apollo/client";
import { GET_RELATED_TOURSPOTS } from "../../../queries/toursQuery";
import Loading from "../../../components/Loading/Loading";
import RelatedTourSpotCarosel from "./RelatedTourSpotCarosel";

const RelatedTourSpots = ({ cityId }) => {
  const { loading, error, data } = useQuery(GET_RELATED_TOURSPOTS, {
    variables: { cityId },
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
    <div className="my-6 lg:my-10 flex flex-col gap-5">
      <h4 className="font-bold text-2xl lg:text-4xl">
        Explore Related Tour Place
      </h4>
      <div>
        <RelatedTourSpotCarosel relatedTourSpots={data?.relatedTourSpots} />
      </div>
    </div>
  );
};

export default RelatedTourSpots;
