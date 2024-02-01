const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLScalarType,
  GraphQLNonNull,
  GraphQLInputObjectType,
} = require("graphql");

const TourPlaceContributeInput = new GraphQLInputObjectType({
  name: "TourContributorInput",
  fields: {
    picTime: { type: GraphQLString },
    contributeTitle: { type: GraphQLString },
    content: { type: GraphQLString },
  },
});



const TourPlaceContributeType = new GraphQLObjectType({
  name: "TourContributorType",
  fields: () => ({
    id: { type: GraphQLID },
    picTime: { type: GraphQLString },
    contributeTitle: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

const TourGuideContributionType = new GraphQLObjectType({
  name: "TourGuideContribution",
  fields: () => ({
    id: { type: GraphQLID },
    tourPlaceId: { type: GraphQLID },
    clientProfileID: { type: GraphQLID },
    title: { type: GraphQLString },
    price: { type: GraphQLInt },
    contribute: {
      type: new GraphQLList(TourPlaceContributeType),
    },
  }),
});

module.exports = {
  TourGuideContributionType,
  TourPlaceContributeInput,
};

