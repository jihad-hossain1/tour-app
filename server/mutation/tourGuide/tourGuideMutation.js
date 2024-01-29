const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = require("graphql");
const { TourGuideType } = require("../../typeDef/tourGuideType/tourGuideType");
const TourGuide = require("../../models/TourGuide");

const addTourGuideProfile = {
  type: TourGuideType,
  args: {
    description: { type: GraphQLString },
    uptoPeople: { type: GraphQLString },
    clientId: { type: GraphQLID },
    cityId: { type: GraphQLID },
    responseTime: { type: GraphQLString },
    languages: { type: GraphQLList(GraphQLString) },
    profileImage: { type: GraphQLString },
    tourGuideInstructionType: { type: GraphQLString },
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
