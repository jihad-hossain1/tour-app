
const {
  GraphQLObjectType,
  GraphQLSchema,
} = require("graphql");

const { wpClients,client,clients } = require('../query/clients');
const { projects, project, clientProjects } = require('../query/projects');
const { user, users } = require('../query/users');
const { destination,destinations } = require('../query/destinations');
const { singleContinent, continents } = require('../query/continents');
const { countries } = require('../query/countries');
const { cities,cityByDivision } = require('../query/cities');
const {  divisionByCountry, divisions } = require('../query/divisions');
const { singleCountryTourspotList, singleTourspot, singleTourspotDetails, tourSpots } = require('../query/tourspots');


const { addClient,deleteClient } = require('../mutation/client');
const { addProject,updateProject,deleteProject} = require('../mutation/project');
const { addUser, updateUser, deleteUser } = require('../mutation/user');
const { addDestination, updateDestination, deleteDestination } = require('../mutation/destination');
const { addCountry } = require('../mutation/country');
const { addTourSpot,updateTourspot,deleteTourspot } = require('../mutation/tourSpot');
const { addDivision } = require('../mutation/division');
const { addCity } = require('../mutation/city');


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
    // cities
    cities,
    cityByDivision,
    // divisions
    divisionByCountry,
    divisions,
   
  },
});

//mutation for create delete update operation
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //client
    addClient,
    deleteClient,
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
    // city
    addCity,
    // division
    addDivision,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
