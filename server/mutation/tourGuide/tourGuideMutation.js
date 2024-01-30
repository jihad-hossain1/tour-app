const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = require("graphql");

const TourGuide = require("../../models/TourGuide");
const { TourGuideType } = require("../../typeDef/typeDef");

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
      // console.log(args);
      const tourGuideProfile = new TourGuide(args);
      const saved = await tourGuideProfile.save();
      return saved;
    } catch (error) {
      throw new Error("Error adding tourGuideProfile");
    }
  },
};

const updateTourGuideProfile = {
  type: TourGuideType,
  args: {
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    uptoPeople: { type: GraphQLString },
    cityId: { type: GraphQLID },
    responseTime: { type: GraphQLString },
    languages: { type: GraphQLList(GraphQLString) },
    profileImage: { type: GraphQLString },
    tourGuideInstructionType: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    try {
      // console.log(args);
      return await TourGuide.findByIdAndUpdate(
        args.id,
        {
          $set: args,
        },
        {
          new: true,
        }
      );
    } catch (error) {
      throw new Error("Error adding tourGuideProfile");
    }
  },
};

module.exports = { addTourGuideProfile, updateTourGuideProfile };
