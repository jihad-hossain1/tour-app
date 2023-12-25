const { GraphQLObjectType, GraphQLString,GraphQLID,GraphQLList, } = require("graphql");
const Country = require("../models/Country");
// const { TourSpotType } = require("./schema");
const Division = require("../models/Division");
const City = require("../models/City");
const TourSpot = require("../models/TourSpot");

const ProjectType = new GraphQLObjectType({
  name: "Projects",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    details: { type: GraphQLString },
    status: { type: GraphQLString },
    clientId: { type: GraphQLID },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

const ClientType = new GraphQLObjectType({
  name: "Clients",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: async (parent, args) => {
        let _i = await Project.find();
        let result = _i?.filter((item) => item?.clientId == parent?.id);
        return result;
      },
    },
    clientProject: {
      type: new GraphQLList(ProjectType),
      args: {
        userId: { type: GraphQLID },
      },
      resolve: async (_p, args) => {
        let p = await Project.find();
        let result = p?.filter((item) => item?.clientId == args?.userId);
      },
    },
  }),
});
const UserType = new GraphQLObjectType({
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
const DestinationType = new GraphQLObjectType({
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

const TourSpotType = new GraphQLObjectType({
  name: "TourSpot",
  fields: () => ({
    id: { type: GraphQLID },

    name: { type: GraphQLString },

    description: { type: GraphQLString },

    photo: { type: GraphQLString },

    cityId: { type: GraphQLID },

    countryId: { type: GraphQLID },

    divisionId: { type: GraphQLID },

    perfectTourTime: { type: GraphQLString },

    howToGoThere: { type: GraphQLString },

    howToStayThere: { type: GraphQLString },

    howDoHere: { type: GraphQLString },

    whereToEat: { type: GraphQLString },

    tourTipsGuide: { type: GraphQLString },

    topTourPlace: { type: GraphQLString },
    city: {
      type: CityForAdd,
      resolve: async (parent, args) => {
        try {
          let _i = await City.find();
          let result = _i?.find((item) => item?.id == parent.cityId);
          return result;
        } catch (error) {
          throw new Error("Error fetching city name");
        }
      },
    },

    code: { type: GraphQLString },

    country: {
      type: CountryType,
      resolve: async (parent, args) => {
        try {
          let _i = await Country.find();
          let result = _i?.find((item) => item?.id == parent.countryId);
          return result;
        } catch (error) {
          throw new Error("Error fetching country name");
        }
      },
    },
  }),
});

const CityType = new GraphQLObjectType({
  name: "City",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    touristSpots: {
      type: new GraphQLList(TourSpotType),
      resolve: async (parent, args) => {
        let _i = await TourSpot.find();
        let result = _i?.filter((item) => item?.cityId == parent.id);
        return result;
      },
    },
    description: { type: GraphQLString },
    divisionId: { type: GraphQLID },
    photo: { type: new GraphQLList(GraphQLString) },
  }),
});
const CityForAdd = new GraphQLObjectType({
  name: "AddCity",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    photo: { type: GraphQLString },
    divisionId: { type: GraphQLID },
    division: {
      type: DivisionType,
      resolve: async (parent, args) => {
        let _i = await Division?.findById(parent.divisionId);
        return _i;
      },
    },
  }),
});
const DivisionType = new GraphQLObjectType({
  name: "Division",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: {
      type: CountryType,
      resolve: (parent, args) => {
        return Country.findById(parent.countryId);
      },
    },
    countryId: { type: GraphQLID },
    description: { type: GraphQLString },
    photo: { type: GraphQLString },
    cities: {
      type: new GraphQLList(CityType),
      resolve: async (parent, args) => {
        let _i = await City.find();
        let result = _i?.filter((item) => item?.divisionId == parent.id);
        return result;
      },
    },
  }),
});

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    photo: { type: GraphQLString },
    continentId: { type: GraphQLID },
    touristSpots: {
      type: new GraphQLList(TourSpotType),
      resolve: async (parent, args) => {
        let tourt = await TourSpot.find();
        let result = tourt?.filter(
          (item) => item?.countryCode === parent.countryCode
        );
        return result;
      },
    },
    division: {
      type: new GraphQLList(DivisionType),
      resolve: async (parent, args) => {
        let _i = await Division.find();
        let result = _i?.filter((item) => item?.countryId == parent.id);
        return result;
      },
    },
    city: {
      type: CityType,
      resolve: async (parent, args) => {
        let _i = await City.find();
        let result = _i?.filter((item) => item.division == parent.divisionId);
        return result;
      },
    },
  }),
});

const ContinentType = new GraphQLObjectType({
  name: "Continent",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    img: { type: GraphQLString },
    countries: {
      type: new GraphQLList(CountryType),
      resolve: async (parent, args) => {
        let _i = await Country.find();
        let result = _i?.filter((item) => item?.continentId == parent.id);
        return result;
      },
    },
  }),
});

module.exports = { TourSpotType, CityType, DivisionType, CountryType, ContinentType,DestinationType,UserType,ClientType,ProjectType };