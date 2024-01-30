import React, { useState } from "react";
import { GET_CLIENT, GET_CLIENTS } from "../../../../queries/clientsQuery";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import FileUploader from "../../TourSpot/FileUploader";
import { GET_CITIE } from "../../../../queries/countriesQuery";
import { UPDATE_TOURGUIDE_PROFILE } from "../../../../mutation/tourGuideMutation";

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

  const { loading: isCityLoading, data: cities } = useQuery(GET_CITIE);

  const scafolding = {
    description: clientProfile?.description,
    uptoPeople: clientProfile?.uptoPeople,
    responseTime: clientProfile?.responseTime,
    languages: clientProfile?.languages,
    tourGuideInstructionType: clientProfile?.tourGuideInstructionType,
    cityId: clientProfile?.cityId,
  };

  const [formData, setFormData] = useState(scafolding);

  const [updateTourGuideProfile] = useMutation(UPDATE_TOURGUIDE_PROFILE, {
    variables: {
      id: clientProfile?.id,
      description: formData?.description,
      uptoPeople: formData?.uptoPeople,
      responseTime: formData?.responseTime,
      clientId: formData?.clientId,
      languages: formData?.languages,
      tourGuideInstructionType: formData?.tourGuideInstructionType,
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

  const {
    description,
    uptoPeople,
    cityId,
    responseTime,
    languages,
    tourGuideInstructionType,
  } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    await updateTourGuideProfile(
      description,
      uptoPeople,
      cityId,
      responseTime,
      languages,
      tourGuideInstructionType
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
            defaultValue={formData.description}
            onChange={handleChange}
            cols="30"
            rows="10"
          />

          <input
            placeholder="tourGuideInstructionType"
            name="tourGuideInstructionType"
            type="text"
            className="inpt"
            defaultValue={formData.tourGuideInstructionType}
            onChange={handleChange}
          />
          <input
            placeholder="uptoPeople"
            name="uptoPeople"
            type="number"
            className="inpt"
            defaultValue={formData.uptoPeople}
            onChange={handleChange}
          />
          <input
            placeholder="responseTime"
            name="responseTime"
            type="number"
            className="inpt"
            defaultValue={formData.responseTime}
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
            defaultValue={formData.cityId}
          >
            {cities?.cities?.map((city, index) => (
              <option key={index} value={city?.id}>
                {city?.name}
              </option>
            ))}
          </select>

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
