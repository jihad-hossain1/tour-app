const TourSpot = require("../models/TourSpot");
const { TourSpotType } = require("../typeDef/typeDef");
const {
  GraphQLID,GraphQLList
} = require("graphql");


const singleCountryTourspotList = {
    type: new GraphQLList(TourSpotType),
    args: { id: { type: GraphQLID } },
    resolve: async (parent, args) => {
        const fetchData = await TourSpot.find();
        let result = fetchData?.filter((item) => item?.countryId == args?.id);
        return result;
    },
};



const tourSpots = {
    type: new GraphQLList(TourSpotType),
    resolve: async () => {
        try {
            return await TourSpot.find();
        } catch (error) {
            throw new Error(`Error fetching TourSpot: ${error}`);
        }
    },
};



const singleTourspot = {
    type: TourSpotType,
    args: { id: { type: GraphQLID } },
    resolve: async (parent, args) => {
        try {
            const fetchData = await TourSpot.findById(args?.id);
            return fetchData;
        } catch (error) {
            console.log(error);
        }
    },
};


const singleTourspotDetails = {
    type: TourSpotType,
    args: { id: { type: GraphQLID } },
    resolve: async (parent, args) => {
        try {
            const fetchData = await TourSpot.findById(args?.id);
            return fetchData;
        } catch (error) {
            console.log(error);
        }
    },
};


module.exports = { singleCountryTourspotList, singleTourspot, singleTourspotDetails, tourSpots };