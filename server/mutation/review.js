const {
  GraphQLID,
  GraphQLString, 
} = require("graphql");

const { ReviewType } = require("../typeDef/typeDef");
const Review = require("../models/Review");





const addReview = {
    type: ReviewType,
    args: {
    name: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    email: { type: GraphQLString },
    img: { type: GraphQLString },
    tourSpotId: { type: GraphQLID },
    },
    resolve: async (parent, args) => {
        try {
            const review = new Review(args);
            return await review.save();
        } catch (error) {
            throw new Error("Error adding review");
        }
    },
};


module.exports = { addReview };