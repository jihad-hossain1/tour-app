import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
  #graphql
  query getClients {
    clients(page: 1, limit: 2) {
      id
      name
      phone
    }
  }
`;
const GET_CLIENT = gql`
  #graphql
  query getClient($id: ID!) {
    client(id: $id) {
      id
      name
      email
      phone
      image
      role
      clientType
      clientProfile {
        id
        description
        uptoPeople
        cityId
        responseTime
        languages
        profileImage
        tourGuideInstructionType
        tourGuideReserve {
          id
          clientProfileID
          personPic {
            id
            adult
            children
            infant
            totalPerson
          }
          startTime {
            id
            timePic
          }
        }
        tourGuideContributionDetail {
          id
          notice
          clientProfileID
          includes {
            id
            include
          }
          additionalInfo {
            id
            info
          }
          notIncludes {
            id
            notInclude
          }
        }
        tourGuideContribution {
          id
          tourPlaceId
          clientProfileID
          title
          price
          contribute {
            id
            picTime
            contributeTitle
            content
          }
        }
        city {
          id
          name
          totalTourSpots {
            id
            name
            photo
          }
        }
        images {
          id
          title
          clientId
          clientProfileID
          urls {
            id
            image
          }
        }
      }
    }
  }
`;

export { GET_CLIENTS, GET_CLIENT };
