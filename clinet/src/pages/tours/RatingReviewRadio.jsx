import React, { useState } from "react";

const RatingReviewRadio = ({ handleChange, formData }) => {
  const [value, setValue] = useState(2);
  return (
    <div className="flex flex-col gap-6">
      <label htmlFor="">review range 5</label>
      <input
        name="rating"
        defaultValue={formData?.rating}
        onChange={handleChange}
        type="range"
        maxLength={5}
      />
    </div>
  );
};

export default RatingReviewRadio;
