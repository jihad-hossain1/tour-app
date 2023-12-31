import { Button, Menu, MenuItem, Fade } from "@mui/material";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW_WITH_REPLY } from "../../mutation/reviewMutation";
import { GET_REVIEWS } from "../../queries/reviewsQuery";
import UpdateReview from "./UpdateReview";

const ManageReview = ({ id, review }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHideReview = (rid) => {
    toast.success("we are working on it. comming..");
  };

  const [deleteReviewWithReply] = useMutation(DELETE_REVIEW_WITH_REPLY, {
    variables: { reviewId: id },
    onCompleted: () => {
      toast.success("review has deleted");
    },
    refetchQueries: [{ query: GET_REVIEWS }],
  });

  const handleDelete = (rid) => {
    //
    const deleteConfirm = window.confirm(
      "are you sure? delete this review with reply , you won't revert it"
    );
    if (deleteConfirm) {
      // Save it!
      toast.success("Thing was saved to the database.");
      setAnchorEl(false);
    } else {
      // Do nothing!
      setAnchorEl(false);
      toast.error("Thing was not saved to the database.");
    }
    // console.log(rid);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BsThreeDotsVertical />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleHideReview(id)}>
          <span className="text-xs">Hide Review</span>
        </MenuItem>

        <MenuItem
          onClick={deleteReviewWithReply}
          sx={{ display: "flex", gap: "8px", alignItems: "center" }}
        >
          <span className="text-xs">Delete Review</span>
          <FaRegTrashAlt className="text-red-600 " />
        </MenuItem>

        <UpdateReview IsOpen={open} setAnchorEl={setAnchorEl} review={review} />
      </Menu>
    </div>
  );
};

export default ManageReview;
