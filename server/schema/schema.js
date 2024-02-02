const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { wpClients, client, clients } = require("../query/clients");
const { projects, project, clientProjects } = require("../query/projects");
const { user, users } = require("../query/users");
const { destination, destinations } = require("../query/destinations");
const { singleContinent, continents } = require("../query/continents");
const { countries } = require("../query/countries");
const { cities, cityByDivision } = require("../query/cities");
const { divisionByCountry, divisions } = require("../query/divisions");
const {
  singleCountryTourspotList,
  singleTourspot,
  singleTourspotDetails,
  tourSpots,
  relatedTourSpots,
} = require("../query/tourspots");
const { reviesByTourSpot, newReviews } = require("../query/reviews");
const { getTourGuide } = require("../query/tourGuideQuery");

const {
  addClient,
  deleteClient,
  loginClient,
  updateClientPassword,
  clientPasswordReset,
} = require("../mutation/client");
const {
  addProject,
  updateProject,
  deleteProject,
} = require("../mutation/project");
const { addUser, updateUser, deleteUser } = require("../mutation/user");
const {
  addDestination,
  updateDestination,
  deleteDestination,
} = require("../mutation/destination");
const { addCountry } = require("../mutation/country");
const {
  addTourSpot,
  updateTourspot,
  deleteTourspot,
  deleteTourSpotWithCommentReply,
} = require("../mutation/tourSpot");
const { addDivision } = require("../mutation/division");
const { addCity } = require("../mutation/city");
const {
  addReview,
  addReviewReply,
  addReply,
  deleteReviewWithReply,
  updateReview,
  updateReply,
  deleteReply,
} = require("../mutation/review");
const {
  addTourGuideProfile,
  updateTourGuideProfile,
  uploadTourImages,
  addGuideTourplace,
  addTourGuideContributionDetail,
} = require("../mutation/tourGuide/tourGuideMutation");

//main query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // projects
    projects,
    project,
    clientProjects,
    wpClients,
    // clients
    client,
    clients,
    // users
    users,
    user,
    // destinations
    destinations,
    destination,
    // continents
    singleContinent,
    continents,
    // countries
    countries,
    // tourspot
    singleCountryTourspotList,
    singleTourspot,
    singleTourspotDetails,
    tourSpots,
    relatedTourSpots,
    // cities
    cities,
    cityByDivision,
    // divisions
    divisionByCountry,
    divisions,
    // reviews
    reviesByTourSpot,
    newReviews,
    // tour guide
    getTourGuide,
  },
});

//mutation for create delete update operation
const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //client
    addClient,
    deleteClient,
    loginClient,
    updateClientPassword,
    clientPasswordReset,
    //project
    addProject,
    deleteProject,
    updateProject,
    // user
    addUser,
    deleteUser,
    updateUser,
    // destination
    addDestination,
    updateDestination,
    deleteDestination,
    // country
    addCountry,
    // tourspot
    addTourSpot,
    updateTourspot,
    deleteTourspot,
    deleteTourSpotWithCommentReply,
    // city
    addCity,
    // division
    addDivision,
    // review
    addReview,
    addReviewReply,
    addReply,
    deleteReviewWithReply,
    updateReview,
    updateReply,
    deleteReply,
    // tourGuide
    addTourGuideProfile,
    updateTourGuideProfile,
    uploadTourImages,
    addGuideTourplace,
    addTourGuideContributionDetail,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
