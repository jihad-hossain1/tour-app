import { gql } from "@apollo/client";

// const UPDATE_TOURGUIDEPROFILE = gql`
//   #graphql
//   mutation addTourGuideProfile(
//     $description: String
   
//     $profileImage: String
   
//     $tourGuideInstructionType: String
//     $clientId: ID!
//     $cityId: ID!
    
//   ) {
//     addTourGuideProfile(
//       description: $description
     
//       profileImage: $profileImage
     
//       tourGuideInstructionType: $tourGuideInstructionType
     
//       cityId: $cityId
//       clientId: $clientId
//     ) {
//       id
     
    
     
     
      
     
//     }
//   }
// `;

const UPDATE_TOURGUIDEPROFILE = gql`
  #graphql
  mutation addTourGuideProfile(
    $description: String
    $uptoPeople: String
    $profileImage: String
    $languages: [String]
    $tourGuideInstructionType: String
    $clientId: ID
    $cityId: ID
    $responseTime: String
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
      
    }
  }
`;

export { UPDATE_TOURGUIDEPROFILE };
