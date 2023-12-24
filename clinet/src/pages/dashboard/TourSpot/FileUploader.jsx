import { Button, styled } from "@mui/material";
import { LuUploadCloud } from "react-icons/lu";
import axios from "axios";
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUploader = ({ image, setimage, handleOnFileUpload, photo }) => {
  const [video, setVideo] = useState(null);
  return (
    <div className="flex gap-4 items-center">
      <Button
        component="label"
        variant="contained"
        startIcon={<LuUploadCloud />}
        className="w-fit"
        color="warning"
      >
        Upload photo
        <VisuallyHiddenInput
          required
          type="file"
          name=""
          accept="image/*"
          id="image"
          onChange={(e) => setimage((prev) => e.target.files[0])}
        />
      </Button>
      <button onClick={handleOnFileUpload}>upLoad</button>

      <div>
        {photo && (
          <div className="flex items-center gap-4">
            <img src={photo} alt="" className="w-20" />
            <div className="w-fit p-2 rounded border shadow flex flex-col gap-2 items-center">
              <IoMdCheckmarkCircleOutline
                size={25}
                className="text-green-600"
              />
              <p className="text-sm">Upload Successfull</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
