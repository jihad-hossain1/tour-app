const {
  GraphQLID,
  GraphQLString,
} = require("graphql");

const Division = require("../models/Division");
const { DivisionType } = require("../typeDef/typeDef");





const addDivision = {
    type: DivisionType,
    args: {
        name: { type: GraphQLString },
        countryId: { type: GraphQLID },
        description: { type: GraphQLString },
        photo: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        try {
            const division = new Division(args);
            return await division.save();
        } catch (error) {
            throw new Error("Error adding division");
        }
    },
};





module.exports = { addDivision };