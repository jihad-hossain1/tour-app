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

const IncludesInput = new GraphQLInputObjectType({
  name: "IncludesInputType",
  fields: {
    include: { type: GraphQLString },
  },
});
const NotIncludesInput = new GraphQLInputObjectType({
  name: "NotIncludesInputType",
  fields: {
    notInclude: { type: GraphQLString },
  },
});
const AdditionalInfoInput = new GraphQLInputObjectType({
  name: "AdditionalInfoType",
  fields: {
    info: { type: GraphQLString },
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

const TourGuideContributionDetailType = new GraphQLObjectType({
  name: "TourGuideContributionDetail",
  fields: () => ({
    id: { type: GraphQLID },
    clientProfileID: { type: GraphQLID },
    notice: { type: GraphQLString },
    includes: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "IncludeInfo",
          fields: () => ({
            id: { type: GraphQLID },
            include: { type: GraphQLString },
          }),
        })
      ),
    },
    notIncludes: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "NotIncludeInfo",
          fields: () => ({
            id: { type: GraphQLID },
            notInclude: { type: GraphQLString },
          }),
        })
      ),
    },
    additionalInfo: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: "AdditionalInfo",
          fields: () => ({
            id: { type: GraphQLID },
            info: { type: GraphQLString },
          }),
        })
      ),
    },
  }),
});


const TourGuideReserveType = new GraphQLObjectType({
  name: "TourGuideReserve",
  fields: () => ({
    id: { type: GraphQLID },

    clientProfileID: { type: GraphQLID },

    datePic: { type: GraphQLString },

    personPic: {
      type: new GraphQLObjectType({
        name: "PersonPicType",
        fields: () => ({
          id: { type: GraphQLID },
          adult: { type: GraphQLInt },
          children: { type: GraphQLInt },
          infant: { type: GraphQLInt },
          totalPerson: { type: GraphQLInt },
        }),
      }),
    },

    startTime: {
      type: GraphQLList(
        new GraphQLObjectType({
          name: "StartTimeType",
          fields: () => ({
            id: { type: GraphQLID },
            timePic: { type: GraphQLString },
          }),
        })
      ),
    },
  }),
});

module.exports = {
  TourGuideContributionType,
  TourPlaceContributeInput,
  TourGuideContributionDetailType,
  IncludesInput,
  NotIncludesInput,
  AdditionalInfoInput,
  TourGuideReserveType,
};

