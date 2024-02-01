import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";
import { Button, FormControl, InputLabel, TextField } from "@mui/material";
import toast from "react-hot-toast";

const TourGuideContributeForm = ({ conDatas, setConDatas }) => {
  const [contributeTitle, setContributeTitle] = useState("");
  const [content, setContent] = useState("");
  const [picTime, setpicTime] = useState(dayjs());

  const newData = {
    picTime,
    contributeTitle,
    content,
  };

  const handleContributeData = () => {
    if (contributeTitle == "") {
      return toast.error("Contribute Title are required");
    } else if (picTime == "") {
      return toast.error("Time Field are required");
    } else if (content == "") {
      return toast.error("Content are required");
    }
    console.log(conDatas);
    setConDatas([...conDatas, newData]);

    // localStorage.setItem("conDatas", JSON.stringify(conDatas));

    setContributeTitle("");
    setContent("");
    setpicTime("");
    toast.success("contribute add on array");
  };

  return (
    <>
      <div className="flex items-center gap-3 pb-3">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker
              label="Time Picker"
              value={picTime}
              onChange={(newTime) => setpicTime(newTime)}
            />
          </DemoContainer>
        </LocalizationProvider>

        <FormControl>
          <TextField
            value={contributeTitle}
            type="text"
            variant="outlined"
            placeholder="Contribute Tittle"
            name="contributeTitle"
            onChange={(e) => setContributeTitle(e.target.value)}
          />
        </FormControl>
      </div>

      <textarea
        name="content"
        placeholder="content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className="w-full inpt"
        id=""
        cols="30"
        rows="10"
      />
      <Button
        type="button"
        variant="outlined"
        color="success"
        onClick={handleContributeData}
      >
        add contribute
      </Button>
    </>
  );
};

export default TourGuideContributeForm;
