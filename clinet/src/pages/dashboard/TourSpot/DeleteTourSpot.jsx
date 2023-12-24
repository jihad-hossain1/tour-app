import { FaRegTrashCan } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { DELETE_TOURSPOT } from "../../../mutation/tourSpotMutation";
import { GET_TOURSPOTS } from "../../../queries/toursQuery";
import toast from "react-hot-toast";

const DeleteTourSpot = ({ id }) => {
  const [handleDelete] = useMutation(DELETE_TOURSPOT, {
    variables: { id },
    onCompleted: () => {
      toast.success("TourSpot has deleted");
    },
    refetchQueries: [{ query: GET_TOURSPOTS }],
  });

  return (
    <button
      className="w-fit hover:bg-slate-200 rounded shadow-sm hover:shadow p-2"
      onClick={handleDelete}
    >
      <FaRegTrashCan />
    </button>
  );
};

export default DeleteTourSpot;
