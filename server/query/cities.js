
const {
  GraphQLID,GraphQLList
} = require("graphql");
const { CityForAdd, CityType } = require("../typeDef/typeDef");
const City = require("../models/City");



const abc = {
    ab: ''
}

const cities = {
  type: new GraphQLList(CityForAdd),
  resolve: async () => {
    try {
      const cit = await City.find();
      const result = cit?.slice().reverse();
      return result;
    } catch (error) {
      return new Error(`Error fetching City: ${error}`);
    }
  },
};
const getCity = {
  type: CityForAdd,
  args: { id: { type: GraphQLID } },
  resolve: async (parent, args) => {
    try {
      return await City.findById(args?.id);
    } catch (error) {
      return new Error(`Error fetching City: ${error}`);
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

module.exports = { cities, cityByDivision, getCity };