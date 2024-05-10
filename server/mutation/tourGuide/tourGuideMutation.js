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
const {
  TourGuideType,
  ImageType,
  ImageInputType,
  TourGuideProfile,
} = require("../../typeDef/typeDef");
const {
  TourGuideContributionType,
  TourPlaceContributeInput,
  TourGuideContributionDetailType,
  IncludesInput,
  NotIncludesInput,
  AdditionalInfoInput,
  TourGuideReserveType,
} = require("../../typeDef/extraTypeDef");
const Images = require("../../models/Images");
const TourGuideContribution = require("../../models/TourGuideContribution");
const {
  TourGuideContributionDetail,
} = require("../../models/TourGuideContributionDetail");
const TourGuideReserve = require("../../models/TourGuideReserve");
const {
  validateFieldMaxLength,
  fieldValidate,
} = require("../../helpers/validateField");

const addTourGuideProfile = {
  type: TourGuideProfile,
  args: {
    description: { type: GraphQLString },
    uptoPeople: { type: GraphQLInt },
    clientId: { type: GraphQLID },
    cityId: { type: GraphQLID },
    countryId: { type: GraphQLID },
    responseTime: { type: GraphQLString },
    languages: { type: GraphQLList(GraphQLString) },
    profileImage: { type: GraphQLString },
    type: { type: GraphQLString },
  },

  resolve: async (parent, args) => {
    const {
      description,
      uptoPeople,
      clientId,
      cityId,
      responseTime,
      languages,
      profileImage,
      type,
      countryId,
    } = args;

    
    try {
       
      
      validateFieldMaxLength(description, "Description", 20, 1500);
      fieldValidate(countryId, "Country Name");
      fieldValidate(cityId, "City Name");
      fieldValidate(type, "TourGuide Type");

      const existData = await TourGuide.findOne({ clientId: clientId });

      if (existData) {
        throw new Error("Your Profile Already Exist, Update your data");
      }

      const tourGuideProfile = new TourGuide({
        description,
        uptoPeople,
        clientId,
        cityId,
        responseTime,
        languages,
        profileImage,
        type,
        countryId,
      });

      const saved = await tourGuideProfile.save();

      return saved;
    } catch (error) {
      console.log(countryId);
      console.log(error.message);
      return new Error(error.message);
    }
  },
};

const uploadTourImages = {
  type: ImageType,
  args: {
    clientId: { type: GraphQLID },
    clientProfileID: { type: GraphQLID },
    contributionId: { type: GraphQLID },
    title: { type: GraphQLString },
    urls: { type: GraphQLList(ImageInputType) },
  },
  resolve: async (parent, args) => {
    try {
      console.log(args);
      const upImage = new Images(args);
      const saved = await upImage.save();
      return saved;
    } catch (error) {
      return new Error(`Error adding tour up images: ${error}`);
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

const addTourGuideContributionDetail = {
  type: TourGuideContributionDetailType,
  args: {
    clientProfileID: { type: GraphQLID },
    notice: { type: GraphQLString },
    includes: {
      type: new GraphQLList(IncludesInput),
    },
    notIncludes: {
      type: new GraphQLList(NotIncludesInput),
    },
    additionalInfo: {
      type: new GraphQLList(AdditionalInfoInput),
    },
  },
  resolve: async (parent, args) => {
    try {
      const alreadyInfoAdd = await TourGuideContributionDetail.findOne({
        clientProfileID: args?.clientProfileID,
      });
      if (alreadyInfoAdd) {
        return new Error(
          `You are already added TourGuideContributionDetail information! if you want to more info added go to TourGuideContributionDetail update section...`
        );
      }
      const tourGuideContributeDetail = new TourGuideContributionDetail(args);
      const saved = await tourGuideContributeDetail.save();
      return saved;
      // console.log(existPlace);
    } catch (error) {
      return new Error(`Error adding TourGuideContributionDetails: ${error}`);
    }
  },
};

const addTourGuideReserve = {
  type: TourGuideReserveType,
  args: {
    clientProfileID: { type: GraphQLID },
    personPic: {
      type: new GraphQLInputObjectType({
        name: "PersonPicInputType",
        fields: {
          adult: { type: GraphQLInt },
          children: { type: GraphQLInt },
          infant: { type: GraphQLInt },
          totalPerson: { type: GraphQLInt },
        },
      }),
    },
    startTime: {
      type: new GraphQLList(
        new GraphQLInputObjectType({
          name: "StartTimeInputType",
          fields: {
            timePic: { type: GraphQLString },
          },
        })
      ),
    },
  },

  resolve: async (parent, args) => {
    try {
      console.log(args);

      if (args?.startTime?.length == 0) {
        return new Error("start time are required");
      }

      const uptoPeople = await TourGuide.findById(args?.clientProfileID);
      const upP =
        parseInt(uptoPeople.uptoPeople) === args.personPic?.totalPerson;
      if (!upP) {
        return new Error(
          "uptopeople and total person are not match please fill the uptopeople = totalperson"
        );
      }
      console.log(upP);

      const alreadyInfoAdd = await TourGuideReserve.findOne({
        clientProfileID: args?.clientProfileID,
      });

      if (alreadyInfoAdd) {
        return new Error(
          `You are already added TourGuideReserve information! if you want to more info added go to TourGuideReserve update section...`
        );
      }

      const tourGuideReserveSaved = new TourGuideReserve(args);
      const saved = await tourGuideReserveSaved.save();
      return saved;
    } catch (error) {
      return new Error(error);
    }
  },
};
module.exports = {
  addTourGuideProfile,
  updateTourGuideProfile,
  uploadTourImages,
  addGuideTourplace,
  addTourGuideContributionDetail,
  addTourGuideReserve,
};
