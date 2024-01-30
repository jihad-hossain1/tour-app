import { gql } from "@apollo/client";

const UPDATE_TOURGUIDEPROFILE = gql`
  #graphql
  mutation updateTourGuideProfile(
    $description: String
    $uptoPeople: String
    $profileImage: String
    $tourGuideInstructionType: String
    $clientId: ID
    $id: ID
    $responseTime: String
  ) {
    updateTourGuideProfile(
      description: $description
      uptoPeople: $uptoPeople
      profileImage: $profileImage
      tourGuideInstructionType: $tourGuideInstructionType
      responseTime: $responseTime
      id: $id
      clientId: $clientId
    ) {
      id
    }
  }
`;

const ADD_TOURGUIDE_PROFILE = gql`
  #graphql
  mutation addTourGuideProfile(
    $description: String
    $uptoPeople: String
    $profileImage: String
    $tourGuideInstructionType: String
    $clientId: ID
    $cityId: ID
    $responseTime: String
  ) {
    addTourGuideProfile(
      description: $description
      uptoPeople: $uptoPeople
      profileImage: $profileImage
      tourGuideInstructionType: $tourGuideInstructionType
      responseTime: $responseTime
      cityId: $cityId
      clientId: $clientId
    ) {
      id
    }
  }
`;

export { ADD_TOURGUIDE_PROFILE, UPDATE_TOURGUIDEPROFILE };
