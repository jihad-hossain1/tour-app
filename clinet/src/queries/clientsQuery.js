import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  #graphql
  query getClients {
    clients(page: 1, limit: 2) {
      id
      name
      phone
    }
  }
`;

export { GET_CLIENTS };
