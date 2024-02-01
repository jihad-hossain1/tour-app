import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CLIENT } from "../../../../queries/clientsQuery";
import TourGuideContributeForm from "./TourGuideContributeForm";
import toast from "react-hot-toast";
import { ADD_TOURGUIDE_PlACE } from "../../../../mutation/tourGuideMutation";

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

const emptyArray = [];
const AddTourSpotPlaceForGuide = () => {
  const [conDatas, setConDatas] = useState(emptyArray ?? []);

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

  const [addGuidePlace, { data: guidePlace, error: guidePlaceError }] =
    useMutation(ADD_TOURGUIDE_PlACE, {
      variables: {
        contribute: conDatas,
        title: formData.title,
        price: parseFloat(formData.price),
        tourPlaceId: formData.tourPlaceId,
        clientProfileID: clientProfile?.id,
      },
      refetchQueries: {},
    });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // let getLocalItem = localStorage.getItem("conDatas");
  // const parsd = JSON.parse(getLocalItem);
  // console.log(parsd);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title == "") {
      return toast.error("Title are required");
    } else if (formData.tourPlaceId == "") {
      return toast.error("");
    } else if (formData.price == "0" || formData.price == 0) {
      return toast.error("Price are required");
    } else if (conDatas.length < 4) {
      return toast.error(
        "Please Add Minimum 4 Contribure Time with title and relevent content"
      );
    }

    let dataAsSubmit = {
      contribute: conDatas,
      title: formData.title,
      price: parseFloat(formData.price),
      tourPlaceId: formData.tourPlaceId,
      clientProfileID: clientProfile?.id,
    };
    // console.log(dataAsSubmit);

    addGuidePlace(dataAsSubmit);

    toast.success("Successfully added TourPlace Contribution...");

    // localStorage.removeItem("conDatas");
  };

  console.log(guidePlace);

  return (
    <>
      <h4 className="my-4 text-center">Add Tour Place</h4>
      <div className="max-w-2xl mx-auto p-3">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
          <div className=" w-full">
            <Button
              // onClick={handleTourPlaceWithTitle}
              type="submit"
              color="success"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </div>
        </form>

        <div className="flex flex-col gap-3">
          {conDatas?.map((item, index) => (
            <div>
              <h4>{item?.contributeTitle}</h4>
              <p>{item?.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddTourSpotPlaceForGuide;
