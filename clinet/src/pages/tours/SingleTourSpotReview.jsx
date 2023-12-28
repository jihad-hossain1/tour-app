import { Avatar, Button, Rating } from "@mui/material";
import React from "react";
import { SlLike } from "react-icons/sl";

const SingleTourSpotReview = ({ review }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-5 border-b border-zinc-200">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Avatar src={review?.img} alt="user image" />
            <div>
              <h4 className="font-semibold text-lg">{review?.name}</h4>
              <h4 className="text-sm">02/03/2023</h4>
            </div>
          </div>
          <div>
            <Button
              color="info"
              variant="text"
              className="flex items-center gap-1"
            >
              <SlLike />
              <span>{2}</span>
            </Button>
          </div>
        </div>
        <div>
          <Rating
            name="half-rating-read"
            value={review?.rating}
            // precision={0.5}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <h4 className="font-semibold text-xl">{review?.title}</h4>
          <p>{review?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTourSpotReview;
