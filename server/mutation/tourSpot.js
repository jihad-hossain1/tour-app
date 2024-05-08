const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");
const TourSpot = require("../models/TourSpot")
const { TourSpotType } = require("../typeDef/typeDef");
const Review = require("../models/Review");
const { validateField } = require("../helpers/validateField");





const addTourSpot = {
    type: TourSpotType,
    args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        photo: { type: GraphQLString },
        cityId: { type: GraphQLID },
        countryId: { type: GraphQLID },
        divisionId: { type: GraphQLID },
    },
    resolve: async (parent, args) => {
        const { name, description, photo, cityId, countryId, divisionId } = args
        
        try {
            // console.log(args);
            validateField(name, "TourSpot Name", 5, 100)
            validateField(description, "TourSpot Description", 20, 3000)
            validateField(countryId, "Country Name", 2, 30)
            validateField(divisionId, "Division Name", 2, 30)
            validateField(cityId, "City Name", 2, 30)

            const tourSpotExists = await TourSpot.findOne({ name: name.trim() });

            if (tourSpotExists) {
                throw new Error("TourSpot Name Already Exist , try another one");
            }

            const tourSpot = new TourSpot({
                name: name,
                description: description,
                photo: photo,
                cityId: cityId,
                countryId: countryId,
                divisionId: divisionId
            });

            const result = await tourSpot.save();

            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};





const deleteTourspot = {
    type: TourSpotType,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: async (parent, args) => {
        try {
            return await TourSpot.findByIdAndDelete(args.id);
        } catch (error) {
            console.log(error);
        }
    },
};








const updateTourspot = {
    type: TourSpotType,
    args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        photo: { type: GraphQLString },
        cityId: { type: GraphQLID },
        countryId: { type: GraphQLID },
        divisionId: { type: GraphQLID },
        perfectTourTime: { type: GraphQLString },
        howToGoThere: { type: GraphQLString },
        howToStayThere: { type: GraphQLString },
        howDoHere: { type: GraphQLString },
        whereToEat: { type: GraphQLString },
        tourTipsGuide: { type: GraphQLString },
    },

    resolve: async (parent, args) => {
        return await TourSpot.findByIdAndUpdate(
            args.id,
            {
                $set: args,
        
            },
            { new: true }
        );
    },
};


const deleteTourSpotWithCommentReply = {
    type: GraphQLID,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(parent, { id }) {
        // Find the post by ID and remove it
        await TourSpot.findByIdAndDelete(id);

        // Remove comments associated with the post
        await Review.deleteMany({ tourSpot: id });

        // Remove replies associated with the comments
        const reviews = await Review.find({ tourSpot: id });
        const reviewIds = reviews.map(review => review._id);
        await Review.deleteMany({ review: { $in: reviewIds } });

        // Remove comments associated with the tourSpot
        await Review.deleteMany({ tourSpot: id });

        return id;
    },
};


module.exports = { updateTourspot,addTourSpot,deleteTourspot,deleteTourSpotWithCommentReply };