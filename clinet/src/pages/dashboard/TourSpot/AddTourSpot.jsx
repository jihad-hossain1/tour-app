import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Button,
  TextField,
  styled,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Box,
} from "@mui/material";
import ModalAll from "../../../components/ModalAll/ModalAll";
import { LuUploadCloud } from "react-icons/lu";
import {
  GET_CITIE,
  GET_COUNTIRES,
  GET_DIVISIONS,
} from "../../../queries/countriesQuery";
import { ADD_TOURSPOT } from "../../../mutation/tourSpotMutation";

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

const AddTourSpot = () => {
  const scafolding = {
    name: "",

    description: "",

    photo: "",

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

  const [addtour] = useMutation(ADD_TOURSPOT);
  const {
    loading: cload,
    error: cError,
    data: countries,
  } = useQuery(GET_COUNTIRES);
  const { loading: dload, data: divisions } = useQuery(GET_DIVISIONS);
  const { loading: ciload, data: cities } = useQuery(GET_CITIE);

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
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

    console.log(formData);
  };

  return (
    <>
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
            required
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
            required
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
              Country
            </InputLabel>
            <Select
              className="w-full"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="countryId"
              value={formData?.countryId}
              onChange={handleChange}
              label="Country"
            >
              {!cload &&
                countries?.countries?.map((country) => (
                  <MenuItem key={country?.id} value={country?.id}>
                    {country?.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* select division  */}
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-standard-label2">
              Division
            </InputLabel>
            <Select
              className="w-full"
              labelId="demo-simple-select-standard-label2"
              id="demo-simple-select-standard2"
              name="divisionId"
              value={formData?.divisionId}
              onChange={handleChange}
              label="Division"
            >
              {!cload &&
                divisions?.divisions?.map((division) => (
                  <MenuItem key={division?.id} value={division?.id}>
                    {division?.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          {/* select cities  */}
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-standard-label3">
              city
            </InputLabel>
            <Select
              className="w-full"
              labelId="demo-simple-select-standard-label3"
              id="demo-simple-select-standard3"
              name="cityId"
              value={formData?.cityId}
              onChange={handleChange}
              label="city"
            >
              {!ciload &&
                cities?.cities?.map((city) => (
                  <MenuItem key={city?.id} value={city?.id}>
                    {city?.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            type="text"
            required
            multiline
            onChange={handleChange}
            value={formData?.perfectTourTime}
            name="perfectTourTime"
            className="w-full"
            id="outlined-basic4"
            label="perfectTourTime"
            variant="outlined"
          />
          <TextField
            type="text"
            required
            multiline
            onChange={handleChange}
            value={formData?.howToGoThere}
            name="howToGoThere"
            className="w-full"
            id="outlined-basic4"
            label="howToGoThere"
            variant="outlined"
          />
          <TextField
            type="text"
            required
            multiline
            onChange={handleChange}
            value={formData?.howToStayThere}
            name="howToStayThere"
            className="w-full"
            id="outlined-basic4"
            label="howToStayThere"
            variant="outlined"
          />
          <TextField
            type="text"
            required
            multiline
            onChange={handleChange}
            value={formData?.howDoHere}
            name="howDoHere"
            className="w-full"
            id="outlined-basic4"
            label="howDoHere"
            variant="outlined"
          />
          <TextField
            type="text"
            required
            multiline
            onChange={handleChange}
            value={formData?.whereToEat}
            name="whereToEat"
            className="w-full"
            id="outlined-basic4"
            label="whereToEat"
            variant="outlined"
          />
          <TextField
            type="text"
            required
            multiline
            onChange={handleChange}
            value={formData?.tourTipsGuide}
            name="tourTipsGuide"
            className="w-full"
            id="outlined-basic4"
            label="tourTipsGuide"
            variant="outlined"
          />
          <TextField
            type="text"
            required
            multiline
            onChange={handleChange}
            value={formData?.topTourPlace}
            name="topTourPlace"
            className="w-full"
            id="outlined-basic4"
            label="topTourPlace"
            variant="outlined"
          />

          {/* photo upload section  */}
          <Button
            component="label"
            variant="contained"
            startIcon={<LuUploadCloud />}
            className="w-fit"
            color="warning"
          >
            Upload photo
            <VisuallyHiddenInput
              onChange={handleChange}
              value={formData?.photo}
              name="photo"
              type="file"
            />
          </Button>

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
