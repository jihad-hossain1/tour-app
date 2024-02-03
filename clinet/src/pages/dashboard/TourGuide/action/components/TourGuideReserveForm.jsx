import { useState } from "react";
import { Button } from "@mui/material";
import ModalAll from "../../../../../components/ModalAll/ModalAll";
import TimePicker from "./TimePickers";
import PersonPickers from "./PersonPickers";

const TourGuideReserveForm = ({ clientId, clientProfileID }) => {
  const [open, setOpen] = useState(false);
  const [startTime, setstartTime] = useState([]);

  const [personPic, setpersonPic] = useState();

  const handleSubmit = (e) => [
    e.preventDefault(),
    //
    console.log(personPic, startTime),
  ];
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Add TourGuide Reserve</Button>

      <ModalAll title={"TourGuide ReserveForm"} open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TimePicker startTime={startTime} setstartTime={setstartTime} />
          <PersonPickers personPic={personPic} setpersonPic={setpersonPic} />
          <div className="flex justify-start">
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </ModalAll>
    </>
  );
};

export default TourGuideReserveForm;
