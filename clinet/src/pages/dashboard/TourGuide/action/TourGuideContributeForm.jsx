import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";
import { FormControl, InputLabel, TextField } from "@mui/material";

const TourGuideContributeForm = ({ conDatas, setConDatas }) => {
  const [contributeTitle, setContributeTitle] = useState("");
  const [content, setContent] = useState("");

  const [picTime, setpicTime] = useState(dayjs());

  const data = {
    picTime,
    contributeTitle,
    content,
  };

  const handleContributeData = () => {
    const xxdata = Object.entries(data);
    setConDatas((datas) => [...xxdata]);

    //
  };
  return (
    <>
      <div className="flex items-center gap-3 pb-3">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker", "TimePicker"]}>
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
      <button onClick={handleContributeData}>add time</button>
    </>
  );
};

export default TourGuideContributeForm;
