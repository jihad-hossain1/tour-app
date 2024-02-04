import React, { useEffect, useState } from "react";
import ModalAll from "../../../components/ModalAll/ModalAll";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { GET_CONTINETS } from "../../../queries/continentQuery";
import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FileUploader from "../TourSpot/FileUploader";
import { GET_COUNTIRES } from "../../../queries/countriesQuery";
import { ADD_COUNTRY } from "../../../mutation/countryMutaion";

const AddCountry = () => {
  const [_photo, setPhoto] = useState("");
  const [image, setimage] = useState(null);
  const [open, setOpen] = useState(false);

  const {
    loading: cload,
    error: cError,
    data: continents,
  } = useQuery(GET_CONTINETS);

  const scafolding = {
    name: "",
    description: "",
    continentId: "",
  };
  const [formData, setFormData] = useState(scafolding);

  const [addCountry, { data: countryData, error: countryDataAddedError }] =
    useMutation(ADD_COUNTRY, {
      variables: {
        name: formData?.name,
        photo: _photo,
        continentId: formData?.continentId,
        description: formData?.description,
      },
      refetchQueries: [{ query: GET_CONTINETS }],
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
  const { name, continentId, description } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCountry(name, continentId, photo, description);
    setOpen(false);
  };

  useEffect(() => {
    if (countryDataAddedError) {
      toast.error(countryDataAddedError?.message);
    }
    if (countryData) {
      toast.success("country added successfull");
    }
  }, [countryDataAddedError, countryData]);
  return (
    <>
      <Toaster />
      <button onClick={() => setOpen(!open)}>Add Country</button>

      <ModalAll title={"Add Your Country"} open={open} setOpen={setOpen}>
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
                Select Continent
              </InputLabel>
              <Select
                sx={{ width: "100%" }}
                className="w-full"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                name="continentId"
                defaultValue={formData?.continentId}
                onChange={handleChange}
                label="Select Continent"
              >
                {!cload &&
                  !cError &&
                  continents?.continents?.map((continent) => (
                    <MenuItem key={continent?.id} value={continent?.id}>
                      {continent?.name}
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

export default AddCountry;
