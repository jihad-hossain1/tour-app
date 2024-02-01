import { Button } from "@mui/material";
import React, { useState } from "react";
import ModalAll from "../../../../components/ModalAll/ModalAll";
import FileUploader from "../../TourSpot/FileUploader";
import axios from "axios";
import { UPDATE_TOURGUIDE_PROFILE_PHOTO } from "../../../../mutation/tourGuideMutation";
import { useMutation } from "@apollo/client";
import { GET_CLIENT } from "../../../../queries/clientsQuery";
import toast from "react-hot-toast";

const UpdateProfilePhoto = ({ profileImage, clientId, clientProfileID }) => {
  const [_photo, setPhoto] = useState("");
  const [image, setimage] = useState(null);
  const [open, setOpen] = useState(false);
  //   console.log(clientId, clientProfileID);
  const [updateTourGuideProfilePhoto] = useMutation(
    UPDATE_TOURGUIDE_PROFILE_PHOTO,
    {
      variables: {
        id: clientProfileID,
        profileImage: _photo,
      },
      refetchQueries: [{ query: GET_CLIENT, variables: { id: clientId } }],
    }
  );

  const handleOnFileUpload = async (e) => {
    e.preventDefault();
    try {
      let data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "images_preset");
      let api = `https://api.cloudinary.com/v1_1/dqfi9zw3e/image/upload`;
      const res = await axios.post(api, data);
      let _up = await res?.data?.secure_url;
      setPhoto(_up);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (_photo == "") {
      return toast.error("Please select a image");
    }
    let profileImage = { profileImage: _photo };
    updateTourGuideProfilePhoto(profileImage);

    //
  };
  return (
    <>
      <div className="group relative">
        <img
          src={profileImage}
          alt=""
          className="rounded-md object-cover max-h-96 w-full"
        />
        <div className="group-hover:block group-hover:absolute w-full bottom-0  hidden">
          <Button
            className="w-full"
            variant="contained"
            color="success"
            onClick={() => setOpen(!open)}
          >
            Change Image
          </Button>
        </div>
      </div>
      <ModalAll title={"Change Profile Image"} open={open} setOpen={setOpen}>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <FileUploader
              image={image}
              setimage={setimage}
              handleOnFileUpload={handleOnFileUpload}
              photo={_photo}
            />

            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
          </form>
        </div>
      </ModalAll>
    </>
  );
};

export default UpdateProfilePhoto;
