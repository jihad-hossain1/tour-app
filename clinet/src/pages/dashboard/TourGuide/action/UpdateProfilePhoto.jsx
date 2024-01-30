import React, { useState } from "react";
import { getClient } from "../../../../router/ClientRoute";
import { useQuery } from "@apollo/client";

const UpdateProfilePhoto = () => {
  const [isClient, setIsClient] = useState(getClient());
  const {
    loading,
    error,
    data: userData,
  } = useQuery(GET_CLIENT, {
    variables: { id },
  });

  const clientProfile = userData?.client?.clientProfile;
  return <div>UpdateProfilePhoto</div>;
};

export default UpdateProfilePhoto;
