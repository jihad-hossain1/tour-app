import { FaTrash, FaUser } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";
// import { GET_CLIENTS } from "../../queries/clientsQuery";
import DeleteClient from "../DeleteClient";
import { Link } from "react-router-dom";
import { useState } from "react";

const Clients = () => {
  const [inLimit, setInlimit] = useState(4);
  const [inPage, setinPage] = useState(1);

  const GET_CLIENTS = gql`
  #graphql
  query getClients {
    clients(page: ${inPage}, limit: ${inLimit}) {
      id
      name
      phone
    }
  }
`;

  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) {
    return <div>LOading.....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {!loading && !error && (
        <div>
          <div>
            <Link
              to={"/addClient"}
              className="bg-green-600 w-fit rounded p-1 flex gap-2 items-center"
            >
              <FaUser />
              <span>add client</span>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>phone</th>
                <th>id</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {data?.clients.map((client) => (
                <tr key={client?.id}>
                  <td className="p-3 ">{client?.name}</td>
                  <td className="p-3">{client?.phone}</td>
                  <td className="p-3">{client?.id}</td>
                  <td className="p-3">
                    <DeleteClient cid={client?.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex gap-4 ">
        <button className="btn" onClick={() => setinPage(inPage - 1)}>
          prev
        </button>
        <button className="btn" onClick={() => setinPage(inPage + 1)}>
          next
        </button>
      </div>
    </div>
  );
};

export default Clients;
