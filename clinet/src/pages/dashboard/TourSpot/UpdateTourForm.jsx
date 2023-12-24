import React, { useState } from "react";
import OthersInputField from "./OthersInputField";
import { TextField, Button } from "@mui/material";
import CountrySelection from "./CountrySelection";
import FileUploader from "./FileUploader";
import axios from "axios";
import { useMutation } from "@apollo/client";
import { UPDATE_TOURSPOT } from "../../../mutation/tourSpotMutation";
import { GET_TOURSPOTS } from "../../../queries/toursQuery";
import toast, { Toaster } from "react-hot-toast";

const UpdateTourForm = ({ formData }) => {
  const [photo, setPhoto] = useState("");
  const [image, setimage] = useState(null);

  const [_formData, _setFormData] = useState({
    name: formData?.name,
    description: formData?.description,
    // perfectTourTime: formData?.perfectTourTime,
    // howToGoThere: formData?.howToGoThere,
    // howToStayThere: formData?.howToStayThere,
    // howDoHere: formData?.howDoHere,
    // whereToEat: formData?.whereToEat,
    // tourTipsGuide: formData?.tourTipsGuide,
    // topTourPlace: formData?.tourTipsGuide,
  });
  var [updateTourspot] = useMutation(UPDATE_TOURSPOT, {
    variables: {
      id: formData?.id,
      name: _formData?.name,
      description: _formData?.description,
      // perfectTourTime: _formData?.perfectTourTime,
      // howToGoThere: _formData?.howToGoThere,
      // howToStayThere: _formData?.howToStayThere,
      // howDoHere: _formData?.howDoHere,
      // whereToEat: _formData?.whereToEat,
      // tourTipsGuide: _formData?.tourTipsGuide,
      // topTourPlace: _formData?.tourTipsGuide,
    },
    refetchQueries: [{ query: GET_TOURSPOTS, variables: { id: formData?.id } }],
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    _setFormData((previousData) => ({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      // perfectTourTime,
      // howDoHere,
      // howToGoThere,
      // howToStayThere,
      // whereToEat,
      // tourTipsGuide,
      // topTourPlace,
    } = _formData;

    updateTourspot(
      name,
      description
      // perfectTourTime,
      // howToGoThere,
      // howToStayThere,
      // howDoHere,
      // whereToEat,
      // tourTipsGuide,
      // topTourPlace
    );
    toast.success("tourspot updated");
    console.log(_formData, photo);
  };

  return (
    <div>
      <Toaster />
      <form className="max-w-screen-md mx-auto px-2 " onSubmit={handleSubmit}>
        <TextField
          style={{ marginBottom: "8px" }}
          type="text"
          onChange={handleChange}
          defaultValue={formData?.name}
          name="name"
          className="w-full"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          style={{ marginBottom: "8px" }}
          multiline
          type="text"
          onChange={handleChange}
          defaultValue={formData?.description}
          name="description"
          className="w-full"
          id="outlined-basic2"
          label="Description"
          variant="outlined"
        />
        {/* <CountrySelection formData={formData} handleChange={handleChange} /> */}
        {/* <OthersInputField formData={formData} handleChange={handleChange} /> */}
        {/* <FileUploader
          formData={formData}
          image={image}
          setimage={setimage}
          handleOnFileUpload={handleOnFileUpload}
          photo={photo}
        /> */}
        <div className="w-fit">
          <Button type="submit" color="success" variant="contained">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTourForm;
