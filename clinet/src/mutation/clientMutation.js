import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  #graphql
  mutation addClient($name: String!, $phone: String!) {
    addClient(name: $name, phone: $phone) {
      id
      name
      phone
    }
  }
`;

const DELETE_CLIENT = gql`
  #graphql
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      name
      id
      phone
    }
  }
`;

export { DELETE_CLIENT, ADD_CLIENT };
