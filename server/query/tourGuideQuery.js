const { GraphQLID} = require("graphql");
const { TourGuideType } = require("../typeDef/typeDef");
const TourGuide = require("../models/TourGuide");

const getTourGuide = {
  type: TourGuideType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_, args) => {
    try {
      const tourGuide = await TourGuide.findById(args.id);

      if (!tourGuide) {
        throw new Error("TourGuide not found");
      }

      return tourGuide;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

const tourGuideProfile = {
  type: TourGuideType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (_, args) => {
    try {
      const tourGuide = await TourGuide.findOne({ clientId: args.id });

      if (!tourGuide) {
        throw new Error("TourGuide not found");
      }

      return tourGuide;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = { getTourGuide,tourGuideProfile };
