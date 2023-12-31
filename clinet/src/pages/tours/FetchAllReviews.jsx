import { useQuery } from "@apollo/client";
import React from "react";
import { GET_REVIEWS } from "../../queries/reviewsQuery";
import Loading from "../../components/Loading/Loading";
import SingleTourSpotReview from "./SingleTourSpotReview";

const FetchAllReviews = ({ reviews }) => {
  // const { loading, error, data } = useQuery(GET_REVIEWS, {
  //   variables: { id },
  // });
  // if (loading) {
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // }
  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  return (
    <section className="flex flex-col gap-5">
      {reviews
        ?.slice()
        .reverse()
        .map((review) => (
          <SingleTourSpotReview key={review?.id} review={review} />
        ))}
    </section>
  );
};

export default FetchAllReviews;
