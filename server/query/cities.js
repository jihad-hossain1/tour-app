
const {
  GraphQLID,GraphQLList
} = require("graphql");
const { CityForAdd, CityType } = require("../typeDef/typeDef");
const City = require("../models/City");





const cities = {
    type: new GraphQLList(CityForAdd),
    resolve: async () => {
        try {
            return await City.find();
        } catch (error) {
            throw new Error(`Error fetching City: ${error}`);
        }
    },
};


const cityByDivision = {
    type: new GraphQLList(CityType),
    args: { id: { type: GraphQLID } },
    resolve: async (parent, args) => {
        const fetchData = await City.find();
        let result = fetchData?.filter((item) => item?.divisionId == args?.id);
        return result;
    },
};




    module.exports = {cities,cityByDivision}