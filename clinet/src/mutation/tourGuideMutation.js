import { gql } from "@apollo/client";



 const UPDATE_TOURGUIDE_PROFILE = gql`
   #graphql
   mutation UpdateTourGuideProfile(
     $id: ID!
     $description: String
     $uptoPeople: String
     $tourGuideInstructionType: String
     $cityId: ID
     $responseTime: String
     $languages: [String]
   ) {
     updateTourGuideProfile(
       id: $id
       description: $description
       uptoPeople: $uptoPeople
       tourGuideInstructionType: $tourGuideInstructionType
       responseTime: $responseTime
       cityId: $cityId
       languages: $languages
     ) {
       id
       description
     }
   }
 `;
 const UPDATE_TOURGUIDE_PROFILE_PHOTO = gql`
   #graphql
   mutation UpdateTourGuideProfile($id: ID!, $profileImage: String) {
     updateTourGuideProfile(id: $id, profileImage: $profileImage) {
       id
     }
   }
 `;
 const UPLOAD_TOUR_IMAGES = gql`
   #graphql
   mutation UploadTourImages(
     $clientId: ID!
     $clientProfileID: ID!
     $contributionId: ID
     $title: String
     $urls: [ImageInput]
   ) {
     uploadTourImages(
       clientId: $clientId
       urls: $urls
       contributionId: $contributionId
       clientProfileID: $clientProfileID
       title: $title
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
     $languages: [String]
   ) {
     addTourGuideProfile(
       description: $description
       uptoPeople: $uptoPeople
       profileImage: $profileImage
       tourGuideInstructionType: $tourGuideInstructionType
       responseTime: $responseTime
       cityId: $cityId
       clientId: $clientId
       languages: $languages
     ) {
       id
     }
   }
 `;

 const ADD_TOURGUIDE_PlACE = gql`
   #graphql

   mutation AddGuideTourplace(
     $contribute: [TourContributorInput]
     $title: String
     $price: Int
     $clientProfileID: ID
     $tourPlaceId: ID
   ) {
     addGuideTourplace(
       contribute: $contribute
       title: $title
       price: $price
       clientProfileID: $clientProfileID
       tourPlaceId: $tourPlaceId
     ) {
       id
     }
   }
 `;
 const ADD_TOURGUIDE_CONTRIBUTION_DETAIL = gql`
   #graphql

   mutation addTourGuideContributionDetail(
     $clientProfileID: ID
     $notice: String
     $includes: [IncludesInputType]
     $notIncludes: [NotIncludesInputType]
     $additionalInfo: [AdditionalInfoType]
   ) {
     addTourGuideContributionDetail(
       clientProfileID: $clientProfileID
       notice: $notice
       includes: $includes
       notIncludes: $notIncludes
       additionalInfo: $additionalInfo
     ) {
       id
     }
   }
 `;

 export {
   ADD_TOURGUIDE_PROFILE,
   UPDATE_TOURGUIDE_PROFILE,
   UPDATE_TOURGUIDE_PROFILE_PHOTO,
   UPLOAD_TOUR_IMAGES,
   ADD_TOURGUIDE_PlACE,
   ADD_TOURGUIDE_CONTRIBUTION_DETAIL,
 };

