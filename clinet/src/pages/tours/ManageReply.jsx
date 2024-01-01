import { Button, Menu, MenuItem, Fade } from "@mui/material";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { DELETE_REPLY } from "../../mutation/reviewMutation";
import { GET_REVIEWS } from "../../queries/reviewsQuery";
import { GET_SINGLE_TOURSPOT_DETAILS } from "../../queries/toursQuery";
import UpdateReply from "./UpdateReply";

const ManageReply = ({ reply, id }) => {
  const rid = reply?.id;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHideReply = (_rid) => {
    toast.success("we are working on it. comming..");
    console.log(_rid);
  };

  const [deleteReply] = useMutation(DELETE_REPLY, {
    variables: { replyId: rid },
    onCompleted: () => {
      toast.success("reply has deleted");
    },
    refetchQueries: [{ query: GET_SINGLE_TOURSPOT_DETAILS, variables: { id } }],
  });

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
        <MenuItem onClick={() => handleHideReply(rid)}>
          <span className="text-xs">Hide Review</span>
        </MenuItem>
        <UpdateReply id={id} reply={reply} />
        <MenuItem
          onClick={deleteReply}
          sx={{ display: "flex", gap: "8px", alignItems: "center" }}
        >
          <span className="text-xs">Delete Review</span>
          <FaRegTrashAlt className="text-red-600 " />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ManageReply;
