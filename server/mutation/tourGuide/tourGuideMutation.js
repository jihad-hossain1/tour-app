const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
const { TourGuideType } = require("../../typeDef/tourGuideType/tourGuideType");

const TourGuide = require("../../models/tourGuide/TourGuide");

const addTourGuideProfile = {
  type: TourGuideType,
  args: {
    description: { type: GraphQLNonNull(GraphQLString) },
    uptoPeople: { type: GraphQLNonNull(GraphQLInt) },
    cityId: { type: GraphQLNonNull(GraphQLID) },
    responseTime: { type: GraphQLNonNull(GraphQLString) },
    languages: { type: GraphQLList(GraphQLString) },
    profileImage: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args) => {
    try {
      const tourGuideProfile = new TourGuide(args);
      const saved = await tourGuideProfile.save();
      return saved;
    } catch (error) {
      throw new Error("Error adding tourGuideProfile");
    }
  },
};

module.exports = { addTourGuideProfile };
