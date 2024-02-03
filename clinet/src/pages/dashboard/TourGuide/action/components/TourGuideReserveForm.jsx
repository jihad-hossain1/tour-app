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

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  // const maxAdults = 14;
  let personPic = {
    adult: adults,
    children: children,
    infant: infants,
  };
  const [
    addTourGuideReserve,
    { data: reserveData, error: reserveError, loading: reserveLoading },
  ] = useMutation(ADD_TOURGUIDE_RESERVE, {
    variables: {
      clientProfileID: clientProfileID,
      personPic: personPic,
      startTime: startTime,
    },
    refetchQueries: {},
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    //
    console.log(personPic, startTime);
    await addTourGuideReserve(personPic, startTime, clientProfileID);

    toast.success("Tourguide reserve data added successfull");
  };

  useEffect(() => {
    if (reserveError) {
      toast.error(`${reserveError?.message}`);
    }
  }, []);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Add TourGuide Reserve</Button>

      <ModalAll title={"TourGuide ReserveForm"} open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TimePicker startTime={startTime} setstartTime={setstartTime} />
          <PersonPickers
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            infants={infants}
            setInfants={setInfants}
            uptoPeople={uptoPeople}
          />
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
