import { gql } from "@apollo/client";

const GET_COUNTIRES = gql`
  #graphql
  query getCountries {
    countries {
      id
      name
    }
  }
`;
const GET_DIVISIONS = gql`
  #graphql
  query getDivision {
    divisions {
      id
      name
    }
  }
`;
const GET_CITIE = gql`
  #graphql
  query getCities {
    cities {
      id
      name
    }
  }
`;

export { GET_COUNTIRES, GET_DIVISIONS, GET_CITIE };
