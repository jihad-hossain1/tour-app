import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  #graphql
  mutation AddProject(
    $name: String!
    $details: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      details: $details
      status: $status
      clientId: $clientId
    ) {
      id
      name
      details
      status
      client {
        id
        name
        phone
      }
    }
  }
`;
const UPDATE_PROJECT = gql`
  #graphql
  mutation UpdateProject(
    $id: ID!
    $name: String!
    $details: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(id: $id, name: $name, details: $details, status: $status) {
      id
      name
      details
      status
      client {
        id
        name
        phone
      }
    }
  }
`;

const DELETE_PROJECT = gql`
  #graphql
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };
