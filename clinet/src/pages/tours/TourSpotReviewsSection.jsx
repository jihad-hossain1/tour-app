import FetchAllReviews from "./FetchAllReviews";
import TourReviwBox from "./TourReviwBox";
import WriteTourSpotReviewForm from "./WriteTourSpotReviewForm";

const TourSpotReviewsSection = ({ dId }) => {
  return (
    <>
      <div className="my-10">
        <h4 className="py-6 font-bold text-2xl">Reviews</h4>
        <div className="rounded-lg border border-gray-300 shadow-sm p-4 lg:p-8">
          <TourReviwBox />
        </div>
        <div className="my-8">
          <h4 className="text-sm text-center text-gray-600">{`${3} reviews on this Tour - Showing ${1} to ${4}`}</h4>
        </div>
        <div>
          <FetchAllReviews dId={dId} />
        </div>
        <WriteTourSpotReviewForm dId={dId} />
      </div>
    </>
  );
};

export default TourSpotReviewsSection;
