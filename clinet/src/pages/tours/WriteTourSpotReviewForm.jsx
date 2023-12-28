import { Button, Slide, TextField } from "@mui/material";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoChevronUpSharp } from "react-icons/io5";
import RatingReviewRadio from "./RatingReviewRadio";

const WriteTourSpotReviewForm = ({ dId }) => {
  const [toggle, setToggle] = useState(false);
  const scafolding = {
    name: "",
    email: "",
    title: "",
    content: "",
    rating: 4,
  };
  const [formData, setFormData] = useState(scafolding);

  const handleChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, title, content, rating } = formData;
    if (
      name === "" ||
      email === "" ||
      title === "" ||
      content === "" ||
      rating === 0
    ) {
      return alert("All field are required!");
    }
    console.log({ ...formData });
  };
  return (
    <section>
      <Button
        onClick={() => setToggle(!toggle)}
        color="info"
        variant="contained"
        type="button"
        className="flex items-center gap-2"
      >
        <span>Write a Review</span>{" "}
        {toggle ? <IoChevronUpSharp /> : <FaAngleDown />}
      </Button>
      {toggle && (
        <div className="m-4">
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <TextField
                onChange={handleChnage}
                defaultValue={formData?.name}
                id="outlined-rea"
                name="name"
                placeholder="Name"
                type="text"
                style={{ width: "100%" }}
              />
              <TextField
                onChange={handleChnage}
                defaultValue={formData?.email}
                id="outlined-textar"
                name="email"
                placeholder="Email"
                type="email"
                style={{ width: "100%" }}
              />
            </div>
            <TextField
              onChange={handleChnage}
              defaultValue={formData?.title}
              name="title"
              id="outlined"
              placeholder="Title"
              type="text"
              style={{ width: "100%" }}
            />
            <div className="flex gap-3 flex-col lg:flex-row">
              <RatingReviewRadio
                handleChnage={handleChnage}
                formData={formData}
              />
              <TextField
                onChange={handleChnage}
                defaultValue={formData?.content}
                name="content"
                placeholder="Your Content"
                multiline
                type="text"
                minRows={4}
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex justify-end">
              <Button
                className="w-fit"
                type="submit"
                variant="contained"
                color="success"
              >
                Submit Review
              </Button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default WriteTourSpotReviewForm;
