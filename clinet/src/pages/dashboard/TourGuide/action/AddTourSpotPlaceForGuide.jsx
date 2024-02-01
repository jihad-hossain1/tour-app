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
  const [title, setTitle] = useState("");
  const [tourPlaceId, settourplaceid] = useState("");
  const [price, setprice] = useState(0);

  const { id } = useParams();
  const { data: userData } = useQuery(GET_CLIENT, {
    variables: { id },
  });

  const clientProfile = userData?.client?.clientProfile;
  const tourSpotByCity = clientProfile?.city?.totalTourSpots;

  const clientProfileID = clientProfile?.id;

  const [addGuidePlace, { data, loading, error }] = useMutation(
    ADD_TOURGUIDE_PlACE,
    {
      variables: {
        contribute: conDatas,
        title,
        price: parseFloat(price),
        tourPlaceId,
        clientProfileID,
      },
      refetchQueries: [{ query: GET_CLIENT }],
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title == "") {
      return toast.error("Title are required");
    } else if (tourPlaceId == "") {
      return toast.error("");
    } else if (price == "0" || price == 0) {
      return toast.error("Price are required");
    } else if (conDatas.length < 4) {
      return toast.error(
        "Please Add Minimum 4 Contribure Time with title and relevent content"
      );
    }

    // console.log(dataAsSubmit);

    let contribute = conDatas;
    addGuidePlace(title, price, tourPlaceId, clientProfileID, contribute);

    if (!data?.id) {
      toast.error(`${error?.message}`);
      return console.log(error);
    }

    toast.success("Successfully added TourPlace Contribution...");
  };

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
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <TextField
            variant="outlined"
            placeholder="price"
            label="price"
            type="number"
            name="price"
            id="any"
            onChange={(e) => setprice(e.target.value)}
            value={price}
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
                value={tourPlaceId}
                onChange={(e) => settourplaceid(e.target.value)}
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
