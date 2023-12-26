import { gql } from "@apollo/client";

const ADD_TOURSPOT = gql`
  #graphql
  mutation addTourSpot(
    $name: String
    $description: String
    $photo: String
    $countryId: ID!
    $divisionId: ID!
    $cityId: ID!
    $tourTipsGuide: String
    $howDoHere: String
    $howToGoThere: String
    $howToStayThere: String
    $whereToEat: String
    $topTourPlace: String
    $perfectTourTime: String
  ) {
    addTourSpot(
      name: $name
      photo: $photo
      description: $description
      countryId: $countryId
      divisionId: $divisionId
      cityId: $cityId
      tourTipsGuide: $tourTipsGuide
      howDoHere: $howDoHere
      howToGoThere: $howToGoThere
      whereToEat: $whereToEat
      perfectTourTime: $perfectTourTime
      howToStayThere: $howToStayThere
      topTourPlace: $topTourPlace
    ) {
      photo
      name
      description
    }
  }
`;
const DELETE_TOURSPOT = gql`
  #graphql
  mutation deleteTourspot($id: ID!) {
    deleteTourspot(id: $id) {
      id
      name
      photo
    }
  }
`;

const UPDATE_TOURSPOT = gql`
  #graphql
  mutation UpdateTourspot($id: ID, $name: String, $description: String) {
    updateTourspot(id: $id, name: $name, description: $description) {
      id
      name
      description
      perfectTourTime
      howToGoThere
      howToStayThere
      howDoHere
      whereToEat
      tourTipsGuide
      topTourPlace
    }
  }
`;

export { ADD_TOURSPOT, DELETE_TOURSPOT, UPDATE_TOURSPOT };

// $tourTipsGuide: String
//     $howDoHere: String
//     $howToGoThere: String
//     $howToStayThere: String
//     $whereToEat: String
//     $topTourPlace: String
//     $perfectTourTime: String
// $photo: String
//     $countryId: ID
//     $divisionId: ID
//     $cityId: ID

// tourTipsGuide: $tourTipsGuide
//     howDoHere: $howDoHere
//     howToGoThere: $howToGoThere
//     whereToEat: $whereToEat
//     perfectTourTime: $perfectTourTime
//     howToStayThere: $howToStayThere
//     topTourPlace: $topTourPlace
// photo: $photo
//       countryId: $countryId
//       divisionId: $divisionId
//       cityId: $cityId
