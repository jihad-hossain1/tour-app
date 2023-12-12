import Client from "../models/Client";

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// project type
export const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    details: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});
// client type
export const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
// user type
export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    password: { type: GraphQLString },
    photo: { type: GraphQLString },
  }),
});
// destination type
export const DestinationType = new GraphQLObjectType({
  name: "Destination",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    photo: { type: GraphQLString },
    location: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});
export const ContinentType = new GraphQLObjectType({
  name: "Continent",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});
export const TourSpotType = new GraphQLObjectType({
  name: "TourSpot",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});
export const DivisionType = new GraphQLObjectType({
  name: "Division",
  fields: () => ({
    name: { type: GraphQLString },
    distric: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});
// country type
export const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    touristSpots: { type: TourSpotType },
    // tourSpotId: { type: GraphQLString },
    continent: { type: ContinentType },
    description: { type: GraphQLString },
    division: { type: DivisionType },
  }),
});
