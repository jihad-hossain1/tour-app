import React, { useState } from "react";
import toast from "react-hot-toast";
import ModalAll from "../../../../components/ModalAll/ModalAll";
import { Button, TextField } from "@mui/material";
import MultipleImageUploader from "../../../../utils/MultipleImageUploader";
import { useMutation } from "@apollo/client";
import { UPLOAD_TOUR_IMAGES } from "../../../../mutation/tourGuideMutation";
import { GET_CLIENT } from "../../../../queries/clientsQuery";

const UploadTourImages = ({ clientProfileID, clientId }) => {
  const [open, setOpen] = useState(false);
  const [multiImage, setMultiImage] = useState([]);
  const [multiLink, setmultiLink] = useState([]);
  const [title, setTitle] = useState("");

  const [uploadImages] = useMutation(UPLOAD_TOUR_IMAGES, {
    variables: {
      clientId,
      clientProfileID,
      title,
      urls: multiLink,
    },
    refetchQueries: [{ query: GET_CLIENT, variables: { id: clientId } }],
  });

  const urls = multiLink;
  //   console.log(urls);
  const handleImageSubmit = (e) => {
    e.preventDefault();
    if (multiLink.length == 0) {
      return toast.error("Please select images and upload");
    } else if (title == "") {
      return toast.error("Please fill title input");
    }
    uploadImages(clientId, clientProfileID, title, urls);
    toast.success("Image Upload Successfull");
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(!open)} variant="outlined" color="warning">
        Upload Images
      </Button>
      <ModalAll open={open} setOpen={setOpen} title={"UploadTourImages"}>
        <div className="flex flex-col gap-3">
          <form onSubmit={handleImageSubmit} className="flex flex-col gap-3">
            <div className="w-fit">
              <Button type="submit" color="success" variant="contained">
                submit
              </Button>
            </div>
            <TextField
              variant="outlined"
              placeholder="Image Title"
              label="Image Title"
              type="text"
              name=""
              id="any"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </form>
          <MultipleImageUploader
            multiLink={multiLink}
            setmultiLink={setmultiLink}
            multiImage={multiImage}
            setMultiImage={setMultiImage}
          />
        </div>
      </ModalAll>
    </>
  );
};

export default UploadTourImages;
