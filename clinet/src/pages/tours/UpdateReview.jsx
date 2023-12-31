import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { UPDATE_REVIEW } from "../../mutation/reviewMutation";
import { GET_REVIEWS } from "../../queries/reviewsQuery";
import toast, { Toaster } from "react-hot-toast";
import ModalAll from "../../components/ModalAll/ModalAll";
import { MenuItem, TextField } from "@mui/material";
import { PiNotePencilThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const UpdateReview = ({ review }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuItem
        onClick={() => setIsOpen(true)}
        sx={{ display: "flex", gap: "8px", alignItems: "center" }}
      >
        <span className="text-xs">Edit Review</span>
        <PiNotePencilThin className="text-green-600 " />
      </MenuItem>

      <SpringModal review={review} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const SpringModal = ({ review, isOpen, setIsOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
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
              <form action="" onClick={handleSubmit} className="mt-5">
                <TextField
                  className="w-full bg-slate-50 rounded-md border"
                  minRows={3}
                  name="newContent"
                  defaultValue={review?.content}
                  label={"New Content"}
                  sx={{ color: "#fff" }}
                  multiline
                />
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-zinc-50 hover:bg-blue-600/80 transition-colors  font-semibold w-full py-2 rounded-md shadow-md"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
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
  );
};

export default UpdateReview;

//   <MenuItem
//     onClick={() => handleModalOpen()}
//     sx={{ display: "flex", gap: "8px", alignItems: "center" }}
//   >
//     <span className="text-xs">Edit Review</span>
//     <PiNotePencilThin className="text-green-600 " />
//   </MenuItem>
