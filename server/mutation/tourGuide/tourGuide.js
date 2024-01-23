const { GraphQLID, GraphQLString, GraphQLInt } = require("graphql");
const { TourGuideType } = require("../../typeDef/typeDef");
const TourGuide = require("../models/TourGuide");

const addTourGuide = {
  type: TourGuideType,
  args: {
    name: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    email: { type: GraphQLString },
    img: { type: GraphQLString },
    rating: { type: GraphQLInt },
    tourSpotId: { type: GraphQLID },
  },
  resolve: async (parent, args) => {
    try {
      const review = new TourGuide(args);
      return await review.save();
    } catch (error) {
      throw new Error("Error adding review");
    }
  },
};
