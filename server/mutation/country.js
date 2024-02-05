const { GraphQLID, GraphQLString } = require("graphql");
const Country = require("../models/Country");
const { CountryType } = require("../typeDef/typeDef");

const addCountry = {
  type: CountryType,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    photo: { type: GraphQLString },
    continentId: { type: GraphQLID },
  },
  resolve: async (parent, args) => {
    try {
      const alreadyName = await Country.findOne({ name: args?.name });
      if (alreadyName) {
        return new Error("Country Already Exist , try another one");
      }
      const country = new Country(args);
      return await country.save();
    } catch (error) {
      return new Error("Error adding country");
    }
  },
};

module.exports = { addCountry };
