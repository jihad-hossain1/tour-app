import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useState } from "react";
import toast from "react-hot-toast";
import picTimer from "../../../../../utils/timeHourFormate";

const TimePickers = ({ startTime, setstartTime }) => {
  const [picTime, setpicTime] = useState(dayjs());
  const newData = { picTime };

  const handleContributeData = () => {
    setstartTime([...startTime, newData]);

    setpicTime("");
    toast.success("time add on array");
  };
  return (
    <div className="flex flex-col gap-2">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Time Picker"
          value={picTime}
          onChange={(newTime) => setpicTime(newTime)}
        />
      </LocalizationProvider>
      <div className="flex justify-end">
        <button
          type="button"
          className="w-fit rounded-md shadow-sm hover:shadow px-3 border border-green-600 bg-green-600 text-zinc-50"
          onClick={handleContributeData}
        >
          Add
        </button>
      </div>
      <div className="flex items-center gap-2">
        {startTime?.map((item, index) => {
          let pic = JSON.stringify(item?.picTime);
          pic = JSON.parse(pic);
          return (
            <div key={index}>
              <h4>{picTimer(pic)}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimePickers;
