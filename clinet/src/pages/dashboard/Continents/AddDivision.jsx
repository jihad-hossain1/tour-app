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
import { GET_COUNTIRES } from "../../../queries/countriesQuery";
import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FileUploader from "../TourSpot/FileUploader";
import { ADD_DIVISION } from "../../../mutation/countryMutaion";

const AddDivision = () => {
  const [_photo, setPhoto] = useState("");
  const [image, setimage] = useState(null);
  const [open, setOpen] = useState(false);

  const {
    loading: cload,
    error: cError,
    data: countries,
  } = useQuery(GET_COUNTIRES);

  const scafolding = {
    name: "",
    description: "",
    countryId: "",
  };
  const [formData, setFormData] = useState(scafolding);

  const [addDivision] = useMutation(ADD_DIVISION, {
    variables: {
      name: formData?.name,
      photo: _photo,
      countryId: formData?.countryId,
      description: formData?.description,
    },
    refetchQueries: [{ query: GET_COUNTIRES }],
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
  const { name, countryId, description } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    addDivision(name, countryId, photo, description);

    toast.success("division added");
  };

  return (
    <>
      <Toaster />
      <button onClick={() => setOpen(!open)}>Add division</button>

      <ModalAll title={"Add Your division"} open={open} setOpen={setOpen}>
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
                Select Country
              </InputLabel>
              <Select
                sx={{ width: "100%" }}
                className="w-full"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="countryId"
                defaultValue={formData?.countryId}
                onChange={handleChange}
                label="Select Country"
              >
                {!cload &&
                  !cError &&
                  countries?.countries?.map((country) => (
                    <MenuItem key={country?.id} value={country?.id}>
                      {country?.name}
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

export default AddDivision;
