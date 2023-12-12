import React from "react";

const ClientInfo = ({ client }) => {
  return (
    <div>
      <h4>{client?.name}</h4>
      <h4>{client?.phone}</h4>
      <h4>{client?.id}</h4>
    </div>
  );
};

export default ClientInfo;
