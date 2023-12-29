const {
  GraphQLID,
  GraphQLString,
} = require("graphql");
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
            const country = new Country(args);
            return await country.save();
        } catch (error) {
            throw new Error("Error adding country");
        }
    },
};






module.exports = { addCountry };