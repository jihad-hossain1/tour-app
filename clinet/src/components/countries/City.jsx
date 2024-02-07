import { useParams } from "react-router-dom";
import Destination from "../../pages/Destination/Destination";

const City = () => {
  const paramId = useParams();
  //   console.log(paramId?.id);
  return (
    <div>
      <Destination cityId={paramId?.id} />
    </div>
  );
};

export default City;
