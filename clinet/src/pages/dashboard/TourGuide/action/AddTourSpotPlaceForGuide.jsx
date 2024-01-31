import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CLIENT } from "../../../../queries/clientsQuery";

import TourGuideContributeForm from "./TourGuideContributeForm";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddTourSpotPlaceForGuide = () => {
  const [conDatas, setConDatas] = useState([]);
  const theme = useTheme();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id },
  });

  const clientProfile = data?.client?.clientProfile;
  const tourSpotByCity = clientProfile?.city?.totalTourSpots;

  const scafolding = {
    title: "",
    tourPlaceId: "",
    price: 0,
  };

  const [formData, setFormData] = useState(scafolding);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(conDatas);
    //
  };

  return (
    <>
      <h4 className="my-4 text-center">Add Tour Place</h4>
      <div className="max-w-2xl mx-auto p-3">
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <TextField
            variant="outlined"
            placeholder="Title"
            label="Title"
            type="text"
            name="title"
            id="any"
            onChange={handleChange}
            defaultValue={formData?.title}
          />
          <TextField
            variant="outlined"
            placeholder="price"
            label="price"
            type="number"
            name="price"
            id="any"
            onChange={handleChange}
            defaultValue={formData?.price}
          />
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-name-label">TourPlace</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                input={<OutlinedInput label="TourPlace" />}
                MenuProps={MenuProps}
                name="tourPlaceId"
                defaultValue={formData?.tourPlaceId}
                onChange={handleChange}
              >
                {tourSpotByCity?.map((tourSpot) => (
                  <MenuItem key={tourSpot?.id} value={tourSpot?.id}>
                    {tourSpot?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div>
            <TourGuideContributeForm
              conDatas={conDatas}
              setConDatas={setConDatas}
            />
          </div>
          <div className=" flex justify-end">
            <Button type="submit" color="success" variant="contained">
              submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTourSpotPlaceForGuide;
