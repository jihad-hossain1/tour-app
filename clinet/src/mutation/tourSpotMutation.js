import { gql } from "@apollo/client";

const ADD_TOURSPOT = gql`
  #graphql
  mutation addTourSpot(
    $name: String!
    $description: String!
    $photo: String!
    $countryId: String!
    $divisionId: String!
    $cityId: String!
    $perfectTourTime: String
    $howToGoThere: String
    $howToStayThere: String
    $howDoHere: String
    $whereToEat: String
    $tourTipsGuide: String
    $topTourPlace: String
  ) {
    addTourSpot(
      name: $name
      description: $description
      photo: $photo
      countryId: $countryId
      divisionId: $divisionId
      cityId: $cityId
      perfectTourTime: $perfectTourTime
      howDoHere: $howDoHere
      howToGoThere: $howToGoThere
      whereToEat: $whereToEat
      tourTipsGuide: $tourTipsGuide
      topTourPlace: $topTourPlace
      howToStayThere: $howToStayThere
    ) {
      id
      name
    }
  }
`;
export { ADD_TOURSPOT };
