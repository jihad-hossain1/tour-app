import { useQuery } from "@apollo/client";
import { GET_TOURSPOTS } from "../../../queries/toursQuery";
import ManageSingleTourSpot from "./ManageSingleTourSpot";

const ManageTS = () => {
  const { data, loading, error } = useQuery(GET_TOURSPOTS);

  return (
    <main>
      <h4 className="text-center py-3">Manage your TourSpot</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {!loading &&
          !error &&
          data?.tourSpots?.map((tourSpot) => (
            <ManageSingleTourSpot
              key={tourSpot?.id}
              tourSpot={tourSpot}
            ></ManageSingleTourSpot>
          ))}
      </div>
    </main>
  );
};

export default ManageTS;
