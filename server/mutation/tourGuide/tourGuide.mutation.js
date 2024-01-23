const { GraphQLID, GraphQLString } = require("graphql");
const { TourGuideType } = require("../../typeDef/typeDef");
const {
  TourGuideDescriptionType,
} = require("../../typeDef/tourGuideType/tourGuideType");
const TourGuide = require("../../models/tourGuide/TourGuide");

const addTourGuideProfile = {
  type: TourGuideType,
  args: {
    description: { type: TourGuideDescriptionType },
  },
  resolve: async (parent, args) => {
    try {
      const tourGuideProfile = new TourGuide(args);
      return await tourGuideProfile.save();
    } catch (error) {
      throw new Error("Error adding tourGuideProfile");
    }
  },
};

module.exports = { addTourGuideProfile };
