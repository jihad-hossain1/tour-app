const { GraphQLID, GraphQLList, GraphQLInt } = require("graphql");
const { TourGuideType } = require("../typeDef/typeDef");
const TourGuide = require("../models/TourGuide");

const getTourGuide = {
  type: TourGuideType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (parent, args) => {
    try {
      return await TourGuide.findById(args?.id);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = { getTourGuide };
