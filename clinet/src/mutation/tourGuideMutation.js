import { gql } from "@apollo/client";

const UPDATE_TOURGUIDEPROFILE = gql`
  #graphql
  mutation addTourGuideProfile(
    $description: String
    $uptoPeople: Number
    $profileImage: String
    $languages: Array
    $tourGuideInstructionType: String
    $clientId: ID!
    $cityId: ID!
    $responseTime: Number
  ) {
    addTourGuideProfile(
      description: $description
      uptoPeople: $uptoPeople
      profileImage: $profileImage
      languages: $languages
      tourGuideInstructionType: $tourGuideInstructionType
      responseTime: $responseTime
      cityId: $cityId
      clientId: $clientId
    ) {
      id
      phone
      email
      name
      image
      role
      clientType
    }
  }
`;

export { UPDATE_TOURGUIDEPROFILE };
