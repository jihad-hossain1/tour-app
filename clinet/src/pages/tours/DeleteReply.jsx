import { Button, Menu, MenuItem, Fade } from "@mui/material";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { DELETE_REPLY } from "../../mutation/reviewMutation";
import { GET_REVIEWS } from "../../queries/reviewsQuery";

const DeleteReply = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHideReply = (rid) => {
    toast.success("we are working on it. comming..");
    console.log(rid);
  };

  const [deleteReply] = useMutation(DELETE_REPLY, {
    variables: { replyId: id },
    onCompleted: () => {
      toast.success("reply has deleted");
    },
    refetchQueries: [{ query: GET_REVIEWS }],
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
        <MenuItem onClick={() => handleHideReply(id)}>
          <span className="text-xs">Hide Review</span>
        </MenuItem>

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

export default DeleteReply;
