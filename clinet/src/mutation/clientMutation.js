import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  #graphql
  mutation addClient(
    $email: String!
    $password: String!
    $image: String!
    $name: String!
    $phone: String!
  ) {
    addClient(
      email: $email
      password: $password
      image: $image
      name: $name
      phone: $phone
    ) {
      phone
      email
      name
      image
      role
    }
  }
`;
const LOGIN_CLIENT = gql`
  #graphql
  mutation loginClient($email: String!, $password: String!) {
    loginClient(email: $email, password: $password) {
      phone
      email
      name
      image
      role
    }
  }
`;

const IS_ADD_CLIENT = gql`
  #graphql
  mutation addClient(
    $email: String!
    $password: String!
    $image: String
    $name: String
    $phone: String
  ) {
    addClient(
      email: $email
      password: $password
      image: $image
      name: $name
      phone: $phone
    ) {
      phone
      email
      name
      image
      role
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

export { DELETE_CLIENT, ADD_CLIENT, LOGIN_CLIENT, IS_ADD_CLIENT };
