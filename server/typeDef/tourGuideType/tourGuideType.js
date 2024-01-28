const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLScalarType,
  GraphQLBoolean,
} = require("graphql");
const { TimestampType, ClientType } = require("../typeDef");
const GuideReview = require("../../models/GuideReview");

const TourGuideReviewType = new GraphQLObjectType({
  name: "TourGuideReview",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    rating: { type: GraphQLInt },
    createdAt: { type: TimestampType },
    userId: { type: GraphQLID },
    replies: {
      type: new GraphQLList(TourGuideReviewType),
      resolve(parent, args) {
        return Review.find({ _id: { $in: parent.replies } });
      },
    },
  }),
});

const TourGuideDescriptionType = new GraphQLObjectType({
  name: "TourGuideDescription",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    rating: { type: GraphQLInt },
    createdAt: { type: TimestampType },
    replies: {
      type: new GraphQLList(TourGuideReviewType),
      resolve(parent, args) {
        return Review.find({ _id: { $in: parent.replies } });
      },
    },
  }),
});

const TourGuideType = new GraphQLObjectType({
  name: "TourGuide",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    uptoPeople: { type: GraphQLInt },
    cityId: { type: GraphQLID },
    responseTime: { type: GraphQLString },
    languages: { type: GraphQLList(GraphQLString) },
    profileImage: { type: GraphQLString },
    tourGuideInstructionType: { type: GraphQLString },
    client: { type: ClientType },
    rating: { type: GraphQLInt },
    guideReview: {
      type: new GraphQLList(TourGuideReviewType),
      resolve: async (parent, args) => {
        // TODO
        return await GuideReview.findById(parent.id);
      },
    },
  }),
});

const TourGuideType2 = new GraphQLObjectType({
  name: "TourGuide",
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    profileImage: { type: GraphQLString },
    languages: { type: GraphQLList(GraphQLString) },
    importantNote: { type: GraphQLString },
    profileImage: { type: GraphQLString },
    images: { type: GraphQLList(GraphQLString) },
    about: { type: GraphQLString },
    rating: { type: GraphQLInt },
    responseTime: { type: GraphQLInt },
    // availableAreas: Number,
    tourCategory: { type: GraphQLString },
    uptoPeople: { type: GraphQLInt },
    cityId: { type: GraphQLID },
    tourGuideInstructionType: { type: GraphQLBoolean },
    replies: {
      type: new GraphQLList(),
      resolve(parent, args) {
        return GuideReview.find({ _id: { $in: parent.replies } });
      },
    },
  }),
});

module.exports = {
  TourGuideType,
  TourGuideReviewType,
  TourGuideDescriptionType,
};
