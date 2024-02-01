const {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInputObjectType,
} = require("graphql");

const TourGuide = require("../../models/TourGuide");
const { TourGuideType, ImageType } = require("../../typeDef/typeDef");
const {
  TourGuideContributionType,
  TourPlaceContributeInput,
} = require("../../typeDef/extraTypeDef");
const Images = require("../../models/Images");
const TourGuideContribution = require("../../models/TourGuideContribution");

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

const uploadTourImages = {
  type: ImageType,
  args: {
    clientId: { type: GraphQLID },
    clientProfileID: { type: GraphQLID },
    urls: { type: GraphQLList(GraphQLString) },
    title: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    try {
      // console.log(args);
      const upImage = new Images(args);
      const saved = await upImage.save();
      return saved;
    } catch (error) {
      throw new Error("Error adding tour up images");
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
      console.log(args);
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

const addGuideTourplace = {
  type: TourGuideContributionType,
  args: {
    tourPlaceId: { type: GraphQLID },
    clientProfileID: { type: GraphQLID },
    title: { type: GraphQLString },
    price: { type: GraphQLInt },
    contribute: { type: GraphQLList(TourPlaceContributeInput) },
  },
  resolve: async (parent, args) => {
    try {
      // console.log(args);
      const existPlace = await TourGuideContribution.findOne({
        tourPlaceId: args?.tourPlaceId,
      });
      if (existPlace) {
        return new Error("Tour place are already exist try another tour place");
      }
      const tourGuideContribute = new TourGuideContribution(args);
      const saved = await tourGuideContribute.save();
      return saved;
      // console.log(existPlace);
    } catch (error) {
      throw new Error("Error adding TourGuideContribution");
    }
  },
};
module.exports = {
  addTourGuideProfile,
  updateTourGuideProfile,
  uploadTourImages,
  addGuideTourplace,
};
