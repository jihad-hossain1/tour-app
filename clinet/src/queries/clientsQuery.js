import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  #graphql
  query getClients {
    clients {
      id
      name
      phone
    }
  }
`;

export { GET_CLIENTS };
