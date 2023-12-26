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
const { TourSpotType } = require("../typeDef/typeDef")





const addTourSpot = {
    type: TourSpotType,
    args: {
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

        topTourPlace: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        try {
            const tourSpot = new TourSpot(args);
            return await tourSpot.save();
        } catch (error) {
            throw new Error("Error adding tourSpot");
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


module.exports = { updateTourspot,addTourSpot,deleteTourspot };