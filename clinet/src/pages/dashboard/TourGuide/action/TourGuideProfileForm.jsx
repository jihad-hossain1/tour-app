import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { GET_CITIE } from "../../../../queries/countriesQuery";
import { useMutation, useQuery } from "@apollo/client";
import FileUploader from "../../TourSpot/FileUploader";
import axios from "axios";
import { ADD_TOURGUIDE_PROFILE } from "../../../../mutation/tourGuideMutation";
import { GET_CLIENTS } from "../../../../queries/clientsQuery";

const TourGuideProfileForm = ({ cid, userData, updt }) => {
  const [_photo, setPhoto] = useState("");
  const [image, setimage] = useState(null);

  const { loading: isCityLoading, data: cities } = useQuery(GET_CITIE);

  const [toggel, setToggle] = useState(false);

  const scafolding = {
    description: "",
    uptoPeople: "",
    responseTime: "",
    languages: ["English", "Bangla", "Arabic"],
    tourGuideInstructionType: "",
    cityId: "",
    clientId: cid,
  };

  const [formData, setFormData] = useState(scafolding);

  const [addTourGuideProfile] = useMutation(ADD_TOURGUIDE_PROFILE, {
    variables: {
      description: formData?.description,
      uptoPeople: formData?.uptoPeople,
      cityId: formData?.cityId,
      responseTime: formData?.responseTime,
      clientId: formData?.clientId,
      languages: formData?.languages,
      tourGuideInstructionType: formData?.tourGuideInstructionType,
      profileImage: _photo,
    },
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
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
    let profileImage = { profileImage: _photo };
    const {
      description,
      uptoPeople,
      cityId,
      responseTime,
      clientId,
      languages,
      tourGuideInstructionType,
    } = formData;

    addTourGuideProfile(
      description,
      uptoPeople,
      cityId,
      responseTime,
      clientId,
      languages,
      tourGuideInstructionType,
      profileImage
    );
  };

  return (
    <>
      <Button
        color="info"
        variant="contained"
        onClick={() => setToggle(!toggel)}
        sx={
          userData?.client?.clientProfile
            ? { display: "none" }
            : { display: "block" }
        }
      >
        add Profile
      </Button>

      <div className="mt-5 lg:mt-10">
        {toggel && (
          <div className="max-w-screen-md mx-auto px-2">
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <TextField
                placeholder="description"
                label="description"
                name="description"
                // required
                fullWidth
                variant="outlined"
                type="text"
                defaultValue={userData?.client?.clientProfile?.description}
                onChange={handleChange}
              />
              <TextField
                placeholder="tourGuideInstructionType"
                label="tourGuideInstructionType"
                name="tourGuideInstructionType"
                // required
                fullWidth
                variant="outlined"
                type="text"
                defaultValue={
                  userData?.client?.clientProfile?.tourGuideInstructionType
                }
                onChange={handleChange}
              />
              <TextField
                placeholder="uptoPeople"
                label="uptoPeople"
                name="uptoPeople"
                // required
                fullWidth
                variant="outlined"
                type="number"
                defaultValue={userData?.client?.clientProfile?.uptoPeople}
                onChange={handleChange}
              />
              <TextField
                placeholder="responseTime"
                label="responseTime"
                name="responseTime"
                // required
                fullWidth
                variant="outlined"
                type="number"
                defaultValue={userData?.client?.clientProfile?.responseTime}
                onChange={handleChange}
              />

              <FormControl>
                <InputLabel id="cid">Choice City</InputLabel>
                <Select
                  labelId="cid"
                  variant="outlined"
                  onChange={handleChange}
                  name="cityId"
                  className="w-full"
                  label="Choice City"
                  placeholder="Choice City"
                  defaultValue={userData?.client?.clientProfile?.cityId}
                >
                  {cities?.cities?.map((city, index) => (
                    <MenuItem key={index} value={city?.id}>
                      {city?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FileUploader
                image={image}
                setimage={setimage}
                handleOnFileUpload={handleOnFileUpload}
                photo={_photo}
              />

              <div className="flex justify-end">
                <Button
                  sx={{ marginTop: { sm: "10px", md: "20px" } }}
                  type="submit"
                  variant="contained"
                  color="success"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default TourGuideProfileForm;
