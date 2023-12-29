import React, { useState } from "react";
import ModalAll from "../../../components/ModalAll/ModalAll";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { GET_DIVISIONS, GET_CITIE } from "../../../queries/countriesQuery";
import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FileUploader from "../TourSpot/FileUploader";
import { ADD_CITY } from "../../../mutation/countryMutaion";

const AddCity = () => {
  const [_photo, setPhoto] = useState("");
  const [image, setimage] = useState(null);
  const [open, setOpen] = useState(false);

  const {
    loading: cload,
    error: cError,
    data: divisions,
  } = useQuery(GET_DIVISIONS);

  const scafolding = {
    name: "",
    description: "",
    divisionId: "",
  };
  const [formData, setFormData] = useState(scafolding);

  const [addCity] = useMutation(ADD_CITY, {
    variables: {
      name: formData?.name,
      photo: _photo,
      divisionId: formData?.divisionId,
      description: formData?.description,
    },
    refetchQueries: [{ query: GET_CITIE }],
  });

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

  let photo = { photo: _photo };
  const { name, divisionId, description } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(name, divisionId, photo, description);

    toast.success("city added");
  };

  return (
    <>
      <Toaster />
      <button onClick={() => setOpen(!open)}>Add city</button>

      <ModalAll title={"Add Your city"} open={open} setOpen={setOpen}>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 lg:grid grid-cols-2 lg:gap-4"
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
            {/* select country  */}
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-standard-label">
                Select Division
              </InputLabel>
              <Select
                sx={{ width: "100%" }}
                className="w-full"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="divisionId"
                defaultValue={formData?.divisionId}
                onChange={handleChange}
                label="Select Division"
              >
                {!cload &&
                  !cError &&
                  divisions?.divisions?.map((division) => (
                    <MenuItem key={division?.id} value={division?.id}>
                      {division?.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            {/* <SelectContinent /> */}
            {/* photo upload section  */}
            <FileUploader
              image={image}
              setimage={setimage}
              handleOnFileUpload={handleOnFileUpload}
              photo={_photo}
            />
            <div className="">
              <Button
                className=""
                sx={{ width: "100%" }}
                color="success"
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </ModalAll>
    </>
  );
};

export default AddCity;
