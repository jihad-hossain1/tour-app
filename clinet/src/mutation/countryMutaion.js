import { gql } from "@apollo/client";

const ADD_COUNTRY = gql`
  #graphql
  mutation addCountry($name: String $description: String $continentId: ID $photo: String) {
    addCountry(name: $name description: $description continentId: $continentId photo: $photo) {
      id
      name
      photo
    }
  }
`;

const ADD_DIVISION = gql`
  #graphql
  mutation addDivision($name: String $description: String $countryId: ID $photo: String) {
    addDivision(name: $name description: $description countryId: $countryId photo: $photo) {
      id
      name
      photo
    }
  }
`;

const ADD_CITY = gql`
  #graphql
  mutation addCity($name: String $description: String $divisionId: ID $photo: String) {
    addCity(name: $name description: $description divisionId: $divisionId photo: $photo) {
      id
      name
      photo
    }
  }
`;

// const DELETE_COUNTRY = gql`
//   #graphql
//   mutation deleteCountry($id: ID!) {
//     deleteCountry(id: $id) {
//       name
//       id
//       phone
//     }
//   }
// `;

export {  ADD_COUNTRY,ADD_DIVISION,ADD_CITY };
