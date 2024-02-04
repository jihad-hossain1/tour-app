import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ModalAll from "../../../../../components/ModalAll/ModalAll";
import TimePicker from "./TimePickers";
import PersonPickers from "./PersonPickers";
import { useMutation } from "@apollo/client";
import { ADD_TOURGUIDE_RESERVE } from "../../../../../mutation/tourGuideMutation";
import toast from "react-hot-toast";

const TourGuideReserveForm = ({ clientProfileID, uptoPeople }) => {
  const [open, setOpen] = useState(false);
  const [startTime, setstartTime] = useState([]);

  // const startTime = { startTime: startTimes };
  // const startTimei = [{ timePic: "any time" }, { timePic: "any time 2" }];
  // console.log(startTimei);

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // const maxAdults = 14;
  let totalPerson = adults + children + infants;

  let personPic = {
    adult: adults,
    children: children,
    infant: infants,
    totalPerson: totalPerson,
  };

  const [
    addTourGuideRes,
    { data: reserveData, error: reserveError, loading: reserveLoading },
  ] = useMutation(ADD_TOURGUIDE_RESERVE, {
    variables: {
      clientProfileID,
      personPic,
      startTime,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (TimePicker.length >= 2) {
      return toast.error("minimum 2 start time added");
    }

    await addTourGuideRes(clientProfileID, personPic, startTime);

    setOpen(false);
  };

  useEffect(() => {
    if (reserveError) {
      toast.error(reserveError?.message);
    } else if (reserveData) {
      toast.success("Tourguide reserve data added successfull");
    }
  }, [reserveError, reserveData]);

  // console.log(addTourGuideRes);
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Add TourGuide Reserve</Button>

      <ModalAll title={"TourGuide ReserveForm"} open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <PersonPickers
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            infants={infants}
            setInfants={setInfants}
            uptoPeople={uptoPeople}
          />
          <TimePicker startTime={startTime} setstartTime={setstartTime} />
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
