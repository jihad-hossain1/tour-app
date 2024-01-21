import { Avatar, Button, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import { SlLike } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { useMutation } from "@apollo/client";
import { ADD_REPLY } from "../../mutation/reviewMutation";
import { GET_REVIEWS } from "../../queries/reviewsQuery";
import toast, { Toaster } from "react-hot-toast";
import ManageReview from "./ManageReview";
import ManageReply from "./ManageReply";
import { GET_SINGLE_TOURSPOT_DETAILS } from "../../queries/toursQuery";
import { timeFormate } from "../../utils/timeFormate";

const SingleTourSpotReview = ({ review, id }) => {
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
    refetchQueries: [{ query: GET_SINGLE_TOURSPOT_DETAILS, variables: { id } }],
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
  // console.log(review?.id);

  return (
    <main className="pb-4 ">
      <Toaster />
      <div className="relative shadow-sm flex flex-col gap-2 border-b border-zinc-300 bg-black/5 p-2 lg:p-5 rounded">
        {/* review section  */}
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Avatar src={review?.img} alt="user image" />
            <div>
              <h4 className="font-semibold text-sm">{review?.name}</h4>
              <span className="text-xs">{timeFormate(review?.createdAt)}</span>
              <Rating
                size="small"
                name="half-rating-read"
                value={review?.rating}
                readOnly
              />
            </div>
          </div>
          <div className="relative flex items-center ">
            <Button
              color="info"
              variant="text"
              className="flex items-center gap-1"
            >
              <SlLike />
              <span>{2}</span>
            </Button>
            {/* review delete section start */}
            <ManageReview rid={review?.id} review={review} id={id} />
            {/* review delete section end */}
          </div>
        </div>

        <div className="flex flex-col gap-1">
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
          <section
            className={`ml-10 md:ml-20   rounded-md flex flex-col gap-3 transition-all duration-500`}
          >
            {review &&
              review?.replies
                ?.slice()
                .reverse()
                .map((reply) => (
                  <div
                    key={reply?.id}
                    className="p-2 flex flex-col gap-2 shadow-sm  "
                  >
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <Avatar src={reply?.img} alt="user image" />
                        <div>
                          <h4 className="font-semibold text-lg">
                            {reply?.name}
                          </h4>
                          <span className="text-sm">
                            {timeFormate(reply?.createdAt)}
                            {/* {console.log(reply?.createdAt)} */}
                          </span>
                        </div>
                      </div>
                      <div className="relative flex items-center">
                        <Button
                          color="info"
                          variant="text"
                          className="flex items-center gap-1"
                        >
                          <SlLike />
                          <span>{0}</span>
                        </Button>
                        {/* review delete section start */}
                        <ManageReply reply={reply} id={id} />
                        {/* review delete section end */}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 pb-3">
                      {/* <h4 className="font-semibold text-xl">{reply?.title}</h4> */}
                      <p>{reply?.content}</p>
                    </div>
                  </div>
                ))}
          </section>
        )}

        {/* add review reply  */}

        {replyOpen && (
          <form
            onSubmit={handleSubmitReply}
            className={"flex flex-col gap-1 w-full"}
          >
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
