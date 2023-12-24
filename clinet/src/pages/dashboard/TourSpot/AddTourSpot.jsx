import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, TextField, Box } from "@mui/material";
import ModalAll from "../../../components/ModalAll/ModalAll";
import { ADD_TOURSPOT } from "../../../mutation/tourSpotMutation";
import { GET_TOURSPOTS } from "../../../queries/toursQuery";
import CountrySelection from "./CountrySelection";
import OthersInputField from "./OthersInputField";
import FileUploader from "./FileUploader";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

const AddTourSpot = () => {
  const [photo, setPhoto] = useState("");
  const [image, setimage] = useState(null);

  const scafolding = {
    name: "",
    description: "",
    countryId: "",
    cityId: "",
    divisionId: "",
    perfectTourTime: "",
    howToGoThere: "",
    howToStayThere: "",
    howDoHere: "",
    whereToEat: "",
    tourTipsGuide: "",
    topTourPlace: "",
  };

  const [formData, setFormData] = useState(scafolding);

  const [addtour] = useMutation(ADD_TOURSPOT, {
    variables: {
      name: formData?.name,
      description: formData?.description,
      photo: photo,
      countryId: formData?.countryId,
      cityId: formData?.cityId,
      divisionId: formData?.divisionId,
      perfectTourTime: formData?.perfectTourTime,
      howToGoThere: formData?.howToGoThere,
      howToStayThere: formData?.howToStayThere,
      howDoHere: formData?.howDoHere,
      whereToEat: formData?.whereToEat,
      tourTipsGuide: formData?.tourTipsGuide,
      topTourPlace: formData?.tourTipsGuide,
    },
    refetchQueries: [{ query: GET_TOURSPOTS }],
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      description,
      countryId,
      cityId,
      divisionId,
      perfectTourTime,
      howToGoThere,
      howToStayThere,
      howDoHere,
      whereToEat,
      tourTipsGuide,
      topTourPlace,
    } = formData;

    addtour(
      name,
      description,
      photo,
      countryId,
      cityId,
      divisionId,
      perfectTourTime,
      howToGoThere,
      howToStayThere,
      howDoHere,
      whereToEat,
      tourTipsGuide,
      topTourPlace
    );
    toast.success("Tour spot added");
  };

  return (
    <>
      <Toaster />
      <Button onClick={() => setOpen(!open)} color="warning" variant="outlined">
        Add TourSpot
      </Button>
      <ModalAll title={"Add TourSpot"} open={open} setOpen={setOpen}>
        <Box
          onSubmit={handleSubmit}
          component="form"
          className="flex flex-col gap-5 "
        >
          <TextField
            type="text"
            onChange={handleChange}
            value={formData?.name}
            name="name"
            className="w-full"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            multiline
            type="text"
            onChange={handleChange}
            value={formData?.description}
            name="description"
            className="w-full"
            id="outlined-basic2"
            label="Description"
            variant="outlined"
          />

          <CountrySelection handleChange={handleChange} formData={formData} />

          <OthersInputField handleChange={handleChange} formData={formData} />

          {/* photo upload section  */}

          <FileUploader
            image={image}
            setimage={setimage}
            handleOnFileUpload={handleOnFileUpload}
            photo={photo}
          />

          {/* form submit section  */}
          <Button
            type="submit"
            color="info"
            variant="contained"
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </Box>
      </ModalAll>
    </>
  );
};

export default AddTourSpot;
