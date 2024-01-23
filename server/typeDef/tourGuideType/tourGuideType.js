const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLScalarType,
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
    name: { type: GraphQLString },
    description: { type: TourGuideDescriptionType },
    client: { type: ClientType },
    rating: { type: GraphQLInt },
    guideReview: {
      type: new GraphQLList(TourGuideReviewType),
      resolve: async (parent, args) => {
        // TODO
        return await GuideReview.findById(parent.id);
      },
    },
    // touristSpots: {
    //   type: new GraphQLList(TourSpotType),
    //   resolve: async (parent, args) => {
    //     let _i = await TourSpot.find();
    //     let result = _i?.filter((item) => item?.cityId == parent.id);
    //     return result;
    //   },
    // },

    // photo: { type: new GraphQLList(GraphQLString) },
  }),
});

module.exports = {
  TourGuideType,
  TourGuideReviewType,
  TourGuideDescriptionType,
};
