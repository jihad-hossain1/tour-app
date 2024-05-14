const { GraphQLID} = require("graphql");
const { TourGuideType } = require("../typeDef/typeDef");
const TourGuide = require("../models/TourGuide");
const TourGuideContribution = require("../models/TourGuideContribution");
const { TourGuideContributionType } = require("../typeDef/extraTypeDef");

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
      console.log(tourGuide);

      if (!tourGuide) {
        throw new Error("TourGuide not found");
      }

      return tourGuide;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

const tourGuidePlace = {
  type: TourGuideContributionType,
  args: {
    id: {
      type: GraphQLID,
    },
  },

  resolve: async (_, args) => {
    try {
      const contribution = await TourGuideContribution.findById(args.id);

      if (!contribution) {
        throw new Error("TourGuideContribution not found");
      }

      return contribution;
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = { getTourGuide,tourGuideProfile,tourGuidePlace };
