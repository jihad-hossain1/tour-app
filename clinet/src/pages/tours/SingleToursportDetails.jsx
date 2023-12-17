import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_TOURSPOT_DETAILS } from "../../queries/toursQuery";

const SingleToursportDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_TOURSPOT_DETAILS, {
    variables: { id },
  });

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h4 className="text-center font-semibold text-2xl">
        {data?.singleTourspotDetails?.name}
      </h4>
    </div>
  );
};

export default SingleToursportDetails;
