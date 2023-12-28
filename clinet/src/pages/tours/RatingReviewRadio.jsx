import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const RatingReviewRadio = ({ value, setValue }) => {
  console.log(value);
  return (
    <div className="flex flex-col gap-6">
      Share your rating
      <Rating
        rating={value}
        onClick={(i) => setValue(i + 1)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

const Rating = ({ rating, onClick, style }) => {
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => onClick(index)} style={style}>
          {rating > index ? (
            <AiFillStar className="text-yellow-500" />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      ))}
    </div>
  );
};

export default RatingReviewRadio;
