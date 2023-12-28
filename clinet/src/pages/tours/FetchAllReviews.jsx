import { Avatar, Button, Rating } from "@mui/material";
import React from "react";
import { SlLike } from "react-icons/sl";

const FetchAllReviews = ({ dId }) => {
  return (
    <section className="">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Avatar src="" alt="user image" />
            <div>
              <h4 className="font-semibold text-lg">xyz user</h4>
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
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-3 pb-6">
          <h4 className="font-semibold text-xl">
            Excellent, probably the best yet.
          </h4>
          <p>
            This was an amazing trip. Totally fell in love with Vietnam, We did
            so much in such in two weeks. The cycling, somehow. only felt like a
            small part of the experience as there were so many other things that
            we did. Each day was full on, exceptionally well organised, great
            food, etc Been on a few cycle trips, and I think this was the best
            one so far
          </p>
        </div>
      </div>
    </section>
  );
};

export default FetchAllReviews;
