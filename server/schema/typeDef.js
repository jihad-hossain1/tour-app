const { GraphQLObjectType, GraphQLString } = require("graphql");
const Country = require("../models/Country");
// const { TourSpotType } = require("./schema");
const Division = require("../models/Division");
const City = require("../models/City");
const TourSpot = require("../models/TourSpot");

 const TourSpotType = new GraphQLObjectType({
  name: "TourSpot",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    country: {
      type: CountryType,
      resolve: (parent, args) => {
        return Country.findById(parent.countryId);
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
          type: TourSpotType,
          resolve: async (parent, args) => {
              return await TourSpot.findById(parent.tourSpotId);
    } },
    description: { type: GraphQLString },
    division: {
          type: DivisionType,
          resolve: async (parent, args) => {
        return await Division.findById(parent.divisionId)
    }  },
    photo: { type: GraphQLString },

  }),
});

const DivisionType = new GraphQLObjectType({
  name: "Division",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    city: {
      type: CityType,
      resolve: (parent, args) => {
        return City.findById(parent.continent);
      },
    },
    description: { type: GraphQLString },
    photo: { type: GraphQLString },
    
  }),
});

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    touristSpots: {
          type: TourSpotType,
          resolve: async (parent, args) => {
            return await TourSpot.findById(parent.touristSpotsId)
        }
      },
    continent: {
      type: ContinentType,
      resolve: async (parent, args) => {
        return await Continent.findById(parent.continent);
      },
    },
    description: { type: GraphQLString },
    division: {
          type: DivisionType, resolve: async (parent,args) => {
          return await Division.findById(parent.divisionId)
      } },
    city: {
          type: CityType,
          resolve: async (parent,args) => {
            return  await City.findById(parent.cityId)  
            }
      },
    photo: { type: GraphQLString },
    countryCode: { type: GraphQLString }
  }),
});

const ContinentType = new GraphQLObjectType({
  name: "Continent",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    countries: {
          type: CountryType,
          resolve: async(parent, args) => {
              return await Country.findById(parent.countryId)
          }
    }
  }),
});