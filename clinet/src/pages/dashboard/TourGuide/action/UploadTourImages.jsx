import React, { useState } from "react";
import toast from "react-hot-toast";
import ModalAll from "../../../../components/ModalAll/ModalAll";
import { Button } from "@mui/material";
import MultipleImageUploader from "../../../../utils/MultipleImageUploader";

const UploadTourImages = ({ clientProfileID, clientId }) => {
  const [open, setOpen] = useState(false);
  const [multiImage, setMultiImage] = useState([]);
  const [multiLink, setmultiLink] = useState([]);

  console.log(multiLink);

  return (
    <>
      <Button onClick={() => setOpen(!open)} variant="outlined" color="warning">
        Upload Images
      </Button>
      <ModalAll open={open} setOpen={setOpen} title={"UploadTourImages"}>
        <MultipleImageUploader
          multiLink={multiLink}
          setmultiLink={setmultiLink}
          multiImage={multiImage}
          setMultiImage={setMultiImage}
        />
      </ModalAll>
    </>
  );
};

export default UploadTourImages;
