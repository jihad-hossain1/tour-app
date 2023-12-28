import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_TOURSPOT_DETAILS } from "../../queries/toursQuery";
import Loading from "../../components/Loading/Loading";
import TourSpotReviewsSection from "./TourSpotReviewsSection";
import TourSpotDetails from "./TourSpotDetails";
import NewToursPlace from "./NewToursPlace";
import RelatedTourSpots from "./RelatedTourSpot/RelatedTourSpots";

const SingleToursportDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_TOURSPOT_DETAILS, {
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
    <main className="min-h-screen max-w-screen-xl mx-auto px-2">
      <div className="pt-20">
        <section className="grid grid-cols-1 lg:flex gap-5 lg:gap-10">
          <main className="relative">
            {/* tour details section */}
            <TourSpotDetails data={data} />
            {/* review section  */}
            <TourSpotReviewsSection id={data?.singleTourspotDetails?.id} />
          </main>
          <aside className="sticky  bg-zinc-100/30 rounded-md shadow-[2px_5px_7px_rgba(0,0,0,0.25)] min-w-[392px] h-fit mx-auto ">
            {/* new tour place section  */}
            <NewToursPlace />
          </aside>
        </section>
        {/* RelatedTourSpots section  */}
        <hr className="h-[1px bg-gray-500]" />
        <RelatedTourSpots cityId={data?.singleTourspotDetails?.cityId} />
      </div>
    </main>
  );
};

export default SingleToursportDetails;
