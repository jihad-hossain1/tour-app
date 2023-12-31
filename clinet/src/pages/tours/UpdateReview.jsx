import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { UPDATE_REVIEW } from "../../mutation/reviewMutation";
import { GET_REVIEWS } from "../../queries/reviewsQuery";
import toast, { Toaster } from "react-hot-toast";
import { MenuItem, TextField } from "@mui/material";
import { PiNotePencilThin } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const UpdateReview = ({ review }) => {
  const content = review?.content;
  const id = review?.id;

  const [isOpen, setIsOpen] = useState(false);
   const scafolding = {
     newContent: "",
   };

   const [formData, setFormData] = useState(scafolding);

   const [updateReview] = useMutation(UPDATE_REVIEW, {
     variables: { reviewId: id, newContent: formData?.newContent },
     refetchQueries: [
       { query: GET_REVIEWS, variables: { reviewId: id } },
     ],
   });

   const handleChnage = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     setFormData((prev) => ({
       ...prev,
       [name]: value,
     }));
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     const form = e.target;
    //  const newContent = e.target.value;
     let reviewId = id;
     const { newContent } = formData;
     if (newContent) {
       updateReview(reviewId, newContent);
        // console.log(review);
       toast.success("your review update successfull 🤞✌");
       setTimeout(() => {
       setIsOpen(false)
       }, 1500);
     }

   };
  
  return (
    <>
      <MenuItem
        onClick={() => setIsOpen(!isOpen)}
        sx={{ display: "flex", gap: "8px", alignItems: "center" }}
      >
        <span className="text-xs">Edit Review</span>
        <PiNotePencilThin className="text-green-600 " />
      </MenuItem>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-blue-50 to-blue-100 text-zinc-800 p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-blue-600 grid place-items-center mx-auto">
                  <FiAlertCircle />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2">
                  Update Your Review
                </h3>
                <div
                  action=""
                  // onClick={handleSubmit}
                  className="mt-5"
                >
                  <textarea
                    className="w-full bg-slate-50 rounded-md border min-h-[150px] p-3 border-zinc-300 shadow"
                    name="newContent"
                    onChange={handleChnage}
                    defaultValue={content}
                    label={"New Content"}
                  />
                  <div className="mt-4">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="bg-blue-600 text-zinc-50 hover:bg-blue-600/80 transition-colors  font-semibold w-full py-2 rounded-md shadow-md "
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-zinc-100 hover:opacity-90 transition-opacity  font-semibold px-4 text-red-600 py-2 rounded-md shadow-md"
                  >
                    Cancel, go back
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// const SpringModal = ({  review, isOpen, setIsOpen }) => {
//   console.log(review);


 


//   return (
    
//   );
// };

export default UpdateReview;

//   <MenuItem
//     onClick={() => handleModalOpen()}
//     sx={{ display: "flex", gap: "8px", alignItems: "center" }}
//   >
//     <span className="text-xs">Edit Review</span>
//     <PiNotePencilThin className="text-green-600 " />
//   </MenuItem>
