const {
  GraphQLID,
  GraphQLString,
} = require("graphql");

const { CityForAdd } = require("../typeDef/typeDef");
const City = require("../models/City");


const addCity = {
    type: CityForAdd,
    args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        photo: { type: GraphQLString },
        divisionId: { type: GraphQLID },
    },
    resolve: async (parent, args) => {
        try {
            const city = new City(args);
            return await city.save();
        } catch (error) {
            throw new Error("Error adding city");
        }
    },
};








module.exports = { addCity };