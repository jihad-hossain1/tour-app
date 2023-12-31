import { Avatar, Button, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import { SlLike } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { useMutation } from "@apollo/client";
import { ADD_REPLY } from "../../mutation/reviewMutation";
import { GET_REVIEWS } from "../../queries/reviewsQuery";
import toast, { Toaster } from "react-hot-toast";
import DeleteReview from "./DeleteReview";

const SingleTourSpotReview = ({ review }) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [showReply, setshowReply] = useState(false);

  const scafolding = {
    name: "abc",
    email: "abc@gmail.com",
    content: "",
    img: "user photo link",
  };

  const [formData, setFormData] = useState(scafolding);

  const [addReply] = useMutation(ADD_REPLY, {
    variables: {
      name: formData?.name,
      email: formData?.email,
      content: formData?.content,
      reviewId: review?.id,
      img: formData?.content,
    },
    refetchQueries: [{ query: GET_REVIEWS }],
  });

  const handleChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitReply = (e) => {
    e.preventDefault();
    let reviewId = review?.id;
    const { name, email, img, content } = formData;
    addReply(name, email, img, content, reviewId);
    // console.log(formData);
    toast.success("reply added");
  };
  console.log(review?.id);
  return (
    <main className="pb-4 ">
      <Toaster />
      <div className="relative shadow-md flex flex-col gap-5 border-b border-zinc-300 bg-blue-50/60 p-2 lg:p-5">
        {/* review section  */}
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Avatar src={review?.img} alt="user image" />
            <div>
              <h4 className="font-semibold text-lg">{review?.name}</h4>
              <h4 className="text-sm">02/03/2023</h4>
            </div>
          </div>
          <div className="relative">
            {/* review delete section start */}
            <DeleteReview id={review?.id} />
            {/* review delete section end */}
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

        {/* show total reply  */}
        {review?.replies?.length > 0 ? (
          <div className="lg:absolute z-10 right-5 bottom-3  ">
            <Button
              color="info"
              variant="outlined"
              onClick={() => setshowReply(!showReply)}
            >
              {showReply ? "close tab" : "show reply"}
            </Button>
            <span
              className={
                showReply
                  ? "hidden"
                  : "w-fit relative -top-5 right-4 lg:absolute   lg:-top-3 lg:-right-1 rounded-full px-1 bg-orange-600 text-zinc-50 text-sm"
              }
            >
              {review?.replies?.length || 0}
            </span>
          </div>
        ) : (
          ""
        )}

        {/* reply section  */}
        {showReply && (
          <section className="ml-10 md:ml-20 bg-slate-100  rounded-md flex flex-col gap-3">
            {review &&
              review?.replies
                ?.slice()
                .reverse()
                .map((reply) => (
                  <div className="p-2 flex flex-col gap-5 shadow-md bg-slate-50 ">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <Avatar src={reply?.img} alt="user image" />
                        <div>
                          <h4 className="font-semibold text-lg">
                            {reply?.name}
                          </h4>
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

                    <div className="flex flex-col gap-3 pb-3">
                      <h4 className="font-semibold text-xl">{reply?.title}</h4>
                      <p>{reply?.content}</p>
                    </div>
                  </div>
                ))}
          </section>
        )}

        {/* add review reply  */}

        {replyOpen && (
          <form onSubmit={handleSubmitReply} className={"flex flex-col gap-1"}>
            <textarea
              required
              name="content"
              className="w-full lg:w-[50%] p-3 bg-slate-50 border rounded-md "
              defaultValue={formData?.content}
              onChange={handleChnage}
              placeholder="write content"
            />
            <Button
              type="submit"
              color="success"
              variant="contained"
              className="w-fit "
            >
              submit
            </Button>
          </form>
        )}
        <div>
          <Button
            variant="contained"
            color={"info"}
            onClick={() => setReplyOpen(!replyOpen)}
          >
            {replyOpen ? (
              <span>
                <AiOutlineClose size={25} />
              </span>
            ) : (
              "Reply"
            )}
          </Button>
        </div>
      </div>
    </main>
  );
};

export default SingleTourSpotReview;
