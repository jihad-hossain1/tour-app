const Country = require("../models/Country");
const { CountryType } = require("../typeDef/typeDef");
const {
  GraphQLID,GraphQLList
} = require("graphql");


const countries = {
    type: new GraphQLList(CountryType),
    resolve: async () => {
        try {
            return await Country.find();
        } catch (error) {
            throw new Error(`Error fetching country: ${error}`);
        }
    },
};


module.exports = { countries };