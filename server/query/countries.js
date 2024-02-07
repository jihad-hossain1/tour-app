const Country = require("../models/Country");
const { CountryType } = require("../typeDef/typeDef");
const {
  GraphQLID,GraphQLList
} = require("graphql");


const countries = {
  type: new GraphQLList(CountryType),
  resolve: async () => {
    try {
      const countries = await Country.find();
      // console.log(countries.reverse());
      return countries.reverse();
    } catch (error) {
      throw new Error(`Error fetching country: ${error}`);
    }
  },
};

const singleCountry = {
  type: CountryType,
  resolve: async (parent, args) => {
    try {
      const countries = await Country.find();
      // console.log(countries.reverse());
      return countries.reverse();
    } catch (error) {
      throw new Error(`Error fetching country: ${error}`);
    }
  },
};

module.exports = { countries, singleCountry };