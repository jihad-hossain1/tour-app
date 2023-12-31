import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoChevronUpSharp } from "react-icons/io5";
import RatingReviewRadio from "./RatingReviewRadio";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../../mutation/reviewMutation";
import { GET_SINGLE_TOURSPOT_DETAILS } from "../../queries/toursQuery";
import toast, { Toaster } from "react-hot-toast";

const WriteTourSpotReviewForm = ({ id }) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(0);

  const scafolding = {
    name: "",
    email: "",
    title: "",
    content: "",
    img: "pic",
  };

  const [formData, setFormData] = useState(scafolding);

  const [addReviewReply] = useMutation(ADD_REVIEW, {
    variables: {
      ...formData,
      rating: value,
      tourSpotId: id,
    },
    refetchQueries: [{ query: GET_SINGLE_TOURSPOT_DETAILS, variables: { id } }],
  });

  // refetchQueries: [
  //        { query: GET_REVIEWS, variables: { reviewId: id } },
  //      ],

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

    const { name, email, title, content, img } = formData;
    let rating = value;
    let tourSpotId = id;

    if (name === "" || email === "" || title === "" || content === "") {
      return alert("All field are required !");
    }

    const info = {
      ...formData,
      rating: value,
      tourSpotId: id,
    };

    addReviewReply(name, email, title, content, img, rating, tourSpotId);
    toast.success(`😊 ${name} your review added ❤`);
    // console.log(info);
    setTimeout(() => {
      setToggle(false);
    }, 1500);
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
              <RatingReviewRadio value={value} setValue={setValue} />
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
