import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_SINGLE_TOURSPOT } from "../../../queries/toursQuery";
import UpdateTourForm from "./UpdateTourForm";

const UpdateTourSpot = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_TOURSPOT, {
    variables: { id },
  });

  if (loading) {
    return <div className="text-center mt-28">Loading......</div>;
  }
  if (error) {
    return <div>{error?.message}</div>;
  }

  return (
    <section>
      {!loading && !error && (
        <main>
          <h4 className="text-center py-4">UpdateTourSpot</h4>
          <UpdateTourForm formData={data?.singleTourspot} />
        </main>
      )}
    </section>
  );
};

export default UpdateTourSpot;
