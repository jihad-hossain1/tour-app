import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_CLIENT } from "../../../../queries/clientsQuery";
import { useMutation, useQuery } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import IncludePicker from "./components/ContributeDetailsInfoPicker";
import toast from "react-hot-toast";
import { ADD_TOURGUIDE_CONTRIBUTION_DETAIL } from "../../../../mutation/tourGuideMutation";

const AddTourGuideContributionDetail = () => {
  let [includes, setincludes] = useState([]);
  let [notIncludes, setNotIncludes] = useState([]);
  let [additionalInfo, setadditionalInfo] = useState([]);
  let [notice, setnotice] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const {
    loading: isLoading,
    error: dataError,
    data: userData,
  } = useQuery(GET_CLIENT, {
    variables: { id },
  });

  const clientProfileID = userData?.client?.clientProfile?.id;

  const [
    addTourContributionDetails,
    { data: tourContribution, error: dataSendError },
  ] = useMutation(ADD_TOURGUIDE_CONTRIBUTION_DETAIL, {
    variables: {
      includes: includes,
      notIncludes: notIncludes,
      additionalInfo: additionalInfo,
      notice: notice,
      clientProfileID: clientProfileID,
    },
    refetchQueries: { query: GET_CLIENT },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (notice == "") {
      return toast.error("Importent Noitce field are required");
    } else if (includes.length < 3) {
      return toast.error("Minimum 3 Include Information required");
    } else if (notIncludes.length < 2) {
      return toast.error("Minimum 2 notIncludes Information required");
    } else if (additionalInfo.length < 3) {
      return toast.error("Minimum 3 additionalInfo Information required");
    }

    await addTourContributionDetails(
      clientProfileID,
      notice,
      includes,
      notIncludes,
      additionalInfo
    );

    toast.success("TourContributionDetail Added Successfull");
    navigate("/dashboard");
  };

  useEffect(() => {
    if (dataSendError) {
      toast.error(dataSendError?.message);
    }
  }, [dataSendError]);

  return (
    <main className="max-w-2xl mx-auto p-3">
      <h4 className="text-xl text-center my-3">
        Add TourGuide Contribution Detail
      </h4>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <TextField
          fullWidth
          multiline
          name=""
          type="text"
          variant="outlined"
          placeholder="Important Notice"
          label="Important Notice"
          value={notice}
          onChange={(e) => setnotice(e.target.value)}
        />
        <IncludePicker
          includes={includes}
          setincludes={setincludes}
          notIncludes={notIncludes}
          setNotIncludes={setNotIncludes}
          additionalInfo={additionalInfo}
          setadditionalInfo={setadditionalInfo}
        />
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </form>
    </main>
  );
};

export default AddTourGuideContributionDetail;
