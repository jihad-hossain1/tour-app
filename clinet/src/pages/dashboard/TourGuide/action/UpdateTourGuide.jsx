import React, { useState } from "react";
import { GET_CLIENT, GET_CLIENTS } from "../../../../queries/clientsQuery";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import { UPDATE_TOURGUIDEPROFILE } from "../../../../mutation/tourGuideMutation";
import FileUploader from "../../TourSpot/FileUploader";
import { GET_CITIE } from "../../../../queries/countriesQuery";

const UpdateTourGuide = () => {
  const { id } = useParams();

  const {
    loading,
    error,
    data: userData,
  } = useQuery(GET_CLIENT, {
    variables: { id },
  });

  const clientProfile = userData?.client?.clientProfile;

  const [_photo, setPhoto] = useState("");
  const [image, setimage] = useState(null);

  const { loading: isCityLoading, data: cities } = useQuery(GET_CITIE);

  const scafolding = {
    description: "",
    uptoPeople: "",
    responseTime: "",
    languages: ["English", "Bangla", "Arabic"],
    tourGuideInstructionType: "",
    cityId: "",
  };

  const [formData, setFormData] = useState(scafolding);

  const [updateTourGuideProfile] = useMutation(UPDATE_TOURGUIDEPROFILE, {
    variables: {
      id: clientProfile?.id,
      description: formData?.description,
      uptoPeople: formData?.uptoPeople,
      responseTime: formData?.responseTime,
      clientId: formData?.clientId,
      languages: formData?.languages,
      tourGuideInstructionType: formData?.tourGuideInstructionType,
      profileImage: _photo,
    },
    refetchQueries: [
      { query: GET_CLIENTS, variables: { id: clientProfile?.id } },
    ],
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
      languages,
      tourGuideInstructionType,
    } = formData;

    updateTourGuideProfile(
      description,
      uptoPeople,
      cityId,
      responseTime,
      languages,
      tourGuideInstructionType,
      profileImage
    );
  };

  return (
    <div>
      <h4>Update TourGuide Profile</h4>
      <div className="max-w-screen-md mx-auto px-2">
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <textarea
            placeholder="description"
            name="description"
            variant="outlined"
            className="inpt"
            type="text"
            defaultValue={clientProfile?.description}
            onChange={handleChange}
            cols="30"
            rows="10"
          />

          <input
            placeholder="tourGuideInstructionType"
            name="tourGuideInstructionType"
            type="text"
            className="inpt"
            defaultValue={clientProfile?.tourGuideInstructionType}
            onChange={handleChange}
          />
          <input
            placeholder="uptoPeople"
            name="uptoPeople"
            type="number"
            className="inpt"
            defaultValue={clientProfile?.uptoPeople}
            onChange={handleChange}
          />
          <input
            placeholder="responseTime"
            name="responseTime"
            type="number"
            className="inpt"
            defaultValue={clientProfile?.responseTime}
            onChange={handleChange}
          />

          <select
            labelId="cid"
            variant="outlined"
            onChange={handleChange}
            name="cityId"
            className="w-full inpt"
            label="Choice City"
            placeholder="Choice City"
            defaultValue={clientProfile?.cityId}
          >
            {cities?.cities?.map((city, index) => (
              <option key={index} value={city?.id}>
                {city?.name}
              </option>
            ))}
          </select>

          <div>
            <img
              src={clientProfile?.profileImage}
              className="h-[300px] w-full"
              alt=""
            />
          </div>
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
    </div>
  );
};

export default UpdateTourGuide;
