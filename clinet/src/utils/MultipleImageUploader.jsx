import React, { useState } from "react";
import { uploadMultipleImage } from "./fileuploader";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@mui/material";

const MultipleImageUploader = ({
  multiLink,
  setmultiLink,
  multiImage,
  setMultiImage,
}) => {
  //   const [multiImage, setMultiImage] = useState([]);
  //   const [multiLink, setmultiLink] = useState([]);
  const [loading, setloading] = useState(false);

  const [toggleSeeGallary, settoggleSeeGallary] = useState(false);

  const handleImageSubmit = async (e) => {
    e.preventDefault();

    try {
      setloading(true);
      let arr = [];
      for (let i = 0; i < multiImage.length; i++) {
        const data = await uploadMultipleImage(multiImage[i]);
        console.log(data?.url);
        arr.push(data?.url);
      }
      setmultiLink(arr);
      setloading(false);
      axios.post();
      toast.success("multiple image upload successfull");
      toast.success("check show upload button click");
      console.log(multiLink);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(multiLink);
  return (
    <>
      <form
        action=""
        onSubmit={handleImageSubmit}
        className="flex items-center gap-4"
      >
        <div className="mb-3">
          <label htmlFor="image">Multiple Image Uplaod</label>
          <br />
          <input
            required
            className="border border-gray-400"
            type="file"
            name=""
            accept="image/*"
            id="image"
            multiple={true}
            onChange={(e) => setMultiImage(e.target.files)}
          />
        </div>
        <div>
          <Button variant="outlined" color="success" type="submit">
            {loading ? "uploading..." : "Upload"}
          </Button>
        </div>
      </form>

      <div className="mt-8 ">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => settoggleSeeGallary(!toggleSeeGallary)}
        >
          show uploaded photo
        </Button>
        <div className="grid grid-cols-2 my-3">
          {toggleSeeGallary &&
            multiLink?.map((item) => (
              <div key={item} className=" w-fit">
                <img
                  src={item}
                  className="max-w-[300px] object-cover "
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MultipleImageUploader;
