
const {
  GraphQLID,GraphQLList
} = require("graphql");
const { DivisionType } = require("../typeDef/typeDef");
const Division = require("../models/Division");




const divisionByCountry = {
    type: new GraphQLList(DivisionType),
    args: { id: { type: GraphQLID } },
    resolve: async (parent, args) => {
        const fetchData = await Division.find();
        let result = fetchData?.filter((item) => item?.countryId == args?.id);
        return result;
    },
};



const divisions = {
    type: new GraphQLList(DivisionType),
    resolve: async () => {
        try {
            return await Division.find();
        } catch (error) {
            throw new Error(`Error fetching Division: ${error}`);
        }
    },
};



module.exports = { divisionByCountry, divisions };