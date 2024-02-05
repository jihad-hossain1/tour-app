import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ModalAll from "../../../../../components/ModalAll/ModalAll";
import TimePicker from "./TimePickers";
import PersonPickers from "./PersonPickers";
import { useMutation } from "@apollo/client";
import { ADD_TOURGUIDE_RESERVE } from "../../../../../mutation/tourGuideMutation";
import toast from "react-hot-toast";
import picTimer from "../../../../../utils/timeHourFormate";
import { FaTrash } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

const TourGuideReserveForm = ({
  clientProfileID,
  uptoPeople,
  tourGuideReserve,
}) => {
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
      <Button onClick={() => setOpen(!open)}>
        {!tourGuideReserve
          ? "Add TourGuide Reserve"
          : "Update TourGuide Reserve"}
      </Button>

      <ModalAll
        title={
          !tourGuideReserve
            ? "Add TourGuide Reserve"
            : "Update TourGuide Reserve"
        }
        open={open}
        setOpen={setOpen}
      >
        {!tourGuideReserve ? (
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
        ) : (
          <section className="flex flex-col ">
            <h4 className="text-lg ">Start Time: </h4>
            <div className=" flex items-center gap-3 mb-3">
              {tourGuideReserve?.startTime?.map((item) => (
                <div className="w-fit relative group ">
                  <button
                    className=" border px-6 py-2 rounded-md border-green-500 hover:border-pink-400"
                    key={item?.id}
                  >
                    {picTimer(item?.timePic)}
                  </button>
                  <div className=" group-hover:flex items-center group-hover:justify-between gap-3 hidden group-hover:absolute group-hover:bottom-7">
                    <button>
                      <FaTrash className="text-sm" />
                    </button>
                    <button>
                      <BsPencilSquare className="text-sm" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <h4 className="text-lg">Person Pic: </h4>
            <div>
              <h4>adult: {tourGuideReserve?.personPic?.adult}</h4>
              <h4>children: {tourGuideReserve?.personPic?.children}</h4>
              <h4>infant: {tourGuideReserve?.personPic?.infant}</h4>
              <h4>totalPerson: {tourGuideReserve?.personPic?.totalPerson}</h4>
            </div>
          </section>
        )}
      </ModalAll>
    </>
  );
};

export default TourGuideReserveForm;
