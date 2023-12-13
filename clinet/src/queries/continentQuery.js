import { gql } from "@apollo/client";

const GET_CONTINETS = gql`
  #graphql
  query getContinent {
    continents {
      id
      name
      code
    }
  }
`;

const GET_CONTINET = gql`
  #graphql
  query getContinent{
     countries{
      name
    }
  }
`;

export { GET_CONTINETS, GET_CONTINET };