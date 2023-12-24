const Project = require("../models/Project");
const Client = require("../models/Client");
const User = require("../models/User");
const Destination = require("../models/Destination");
const Country = require("../models/Country");
const TourSpot = require("../models/TourSpot");
const Continent = require("../models/Continent");
const Division = require("../models/Division");
const City = require("../models/City");
const { continents, countries, languages } = require("countries-list");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInt,
} = require("graphql");

// project type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    details: { type: GraphQLString },
    status: { type: GraphQLString },
    clientId: { type: GraphQLID },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

// client type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: async (parent, args) => {
        let _i = await Project.find();
        let result = _i?.filter((item) => item?.clientId == parent?.id);
        return result;
      },
    },
    clientProject: {
      type: new GraphQLList(ProjectType),
      args: {
        userId: { type: GraphQLID },
      },
      resolve: async (_p, args) => {
        let p = await Project.find();
        let result = p?.filter((item) => item?.clientId == args?.userId);
      },
    },
  }),
});
// user type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    password: { type: GraphQLString },
    photo: { type: GraphQLString },
  }),
});
// destination type
const DestinationType = new GraphQLObjectType({
  name: "Destination",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    photo: { type: GraphQLString },
    location: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const TourSpotType = new GraphQLObjectType({
  name: "TourSpot",
  fields: () => ({
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

    topTourPlace: { type: GraphQLString },
    city: {
      type: CityForAdd,
      resolve: async (parent, args) => {
        try {
          let _i = await City.find();
          let result = _i?.find((item) => item?.id == parent.cityId);
          return result;
        } catch (error) {
          throw new Error("Error fetching city name");
        }
      },
    },

    code: { type: GraphQLString },

    country: {
      type: CountryType,
      resolve: async (parent, args) => {
        try {
          let _i = await Country.find();
          let result = _i?.find((item) => item?.id == parent.countryId);
          return result;
        } catch (error) {
          throw new Error("Error fetching country name");
        }
      },
    },
  }),
});

const CityType = new GraphQLObjectType({
  name: "City",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    touristSpots: {
      type: new GraphQLList(TourSpotType),
      resolve: async (parent, args) => {
        let _i = await TourSpot.find();
        let result = _i?.filter((item) => item?.cityId == parent.id);
        return result;
      },
    },
    description: { type: GraphQLString },
    divisionId: { type: GraphQLID },
    photo: { type: new GraphQLList(GraphQLString) },
  }),
});
const CityForAdd = new GraphQLObjectType({
  name: "AddCity",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    photo: { type: GraphQLString },
    divisionId: { type: GraphQLID },
    division: {
      type: DivisionType,
      resolve: async (parent, args) => {
        let _i = await Division?.findById(parent.divisionId);
        return _i;
      },
    },
  }),
});
const DivisionType = new GraphQLObjectType({
  name: "Division",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: {
      type: CountryType,
      resolve: (parent, args) => {
        return Country.findById(parent.countryId);
      },
    },
    countryId: { type: GraphQLID },
    description: { type: GraphQLString },
    photo: { type: GraphQLString },
    cities: {
      type: new GraphQLList(CityType),
      resolve: async (parent, args) => {
        let _i = await City.find();
        let result = _i?.filter((item) => item?.divisionId == parent.id);
        return result;
      },
    },
  }),
});

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    photo: { type: GraphQLString },
    continentId: { type: GraphQLID },
    touristSpots: {
      type: new GraphQLList(TourSpotType),
      resolve: async (parent, args) => {
        let tourt = await TourSpot.find();
        let result = tourt?.filter(
          (item) => item?.countryCode === parent.countryCode
        );
        return result;
      },
    },
    division: {
      type: new GraphQLList(DivisionType),
      resolve: async (parent, args) => {
        let _i = await Division.find();
        let result = _i?.filter((item) => item?.countryId == parent.id);
        return result;
      },
    },
    city: {
      type: CityType,
      resolve: async (parent, args) => {
        let _i = await City.find();
        let result = _i?.filter((item) => item.division == parent.divisionId);
        return result;
      },
    },
  }),
});

const ContinentType = new GraphQLObjectType({
  name: "Continent",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    img: { type: GraphQLString },
    countries: {
      type: new GraphQLList(CountryType),
      resolve: async (parent, args) => {
        let _i = await Country.find();
        let result = _i?.filter((item) => item?.continentId == parent.id);
        return result;
      },
    },
  }),
});

//main query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: async (parent, args) => {
        return await Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
    clientProjects: {
      type: new GraphQLList(ProjectType),
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args) => {
        const fetchData = await Project.find();
        let result = fetchData?.filter((item) => item?.clientId == args?.id);
        return result;
      },
    },
    wpClients: {
      type: new GraphQLList(ClientType),
      resolve: async (parent, args) => {
        try {
          let allClients = await Client.find();
          return allClients;
        } catch (error) {
          console.log("failed to fetch: ", error);
        }
      },
    },
    /* 
    <--- Pagination Client -->
    query{
    clients(page: 1,limit: 10){
      id
     name
    phone} }
    */
    clients: {
      type: new GraphQLList(ClientType),
      args: {
        page: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
      resolve: async (parent, args) => {
        try {
          const { page, limit } = args;
          const startIndex = (page - 1) * limit;
          const endIndex = startIndex + limit;
          let clientsData = await Client.find();
          return clientsData.slice(startIndex, endIndex);
        } catch (error) {
          return error;
        }
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    destinations: {
      type: GraphQLList(DestinationType),
      resolve: async () => {
        try {
          return await Destination.find();
        } catch (error) {
          throw new Error("Error fetching destinations");
        }
      },
    },
    destination: {
      type: DestinationType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          return await Destination.findById(args.id);
        } catch (error) {
          throw new Error("Error fetching destination");
        }
      },
    },
    continents: {
      type: new GraphQLList(ContinentType),
      resolve: async () => {
        try {
          return await Continent.find();
        } catch (error) {
          throw new Error(`Error fetching country: ${error}`);
        }
      },
    },
    singleContinent: {
      type: new GraphQLList(CountryType),
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args) => {
        const fetchData = await Country.find();
        let result = fetchData?.filter((item) => item?.continentId == args?.id);
        return result;
      },
    },
    countries: {
      type: new GraphQLList(CountryType),
      resolve: async () => {
        try {
          return await Country.find();
        } catch (error) {
          throw new Error(`Error fetching country: ${error}`);
        }
      },
    },
    singleCountryTourspotList: {
      type: new GraphQLList(TourSpotType),
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args) => {
        const fetchData = await TourSpot.find();
        let result = fetchData?.filter((item) => item?.countryId == args?.id);
        return result;
      },
    },

    tourSpots: {
      type: new GraphQLList(TourSpotType),
      resolve: async () => {
        try {
          return await TourSpot.find();
        } catch (error) {
          throw new Error(`Error fetching TourSpot: ${error}`);
        }
      },
    },
    singleTourspot: {
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
    },
    singleTourspotDetails: {
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
    },
    cities: {
      type: new GraphQLList(CityForAdd),
      resolve: async () => {
        try {
          return await City.find();
        } catch (error) {
          throw new Error(`Error fetching City: ${error}`);
        }
      },
    },
    cityByDivision: {
      type: new GraphQLList(CityType),
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args) => {
        const fetchData = await City.find();
        let result = fetchData?.filter((item) => item?.divisionId == args?.id);
        return result;
      },
    },
    divisionByCountry: {
      type: new GraphQLList(DivisionType),
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args) => {
        const fetchData = await Division.find();
        let result = fetchData?.filter((item) => item?.countryId == args?.id);
        return result;
      },
    },
    divisions: {
      type: new GraphQLList(DivisionType),
      resolve: async () => {
        try {
          return await Division.find();
        } catch (error) {
          throw new Error(`Error fetching Division: ${error}`);
        }
      },
    },
  },
});

//mutation for create delete update operation
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // add a client
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          phone: args.phone,
        });
        return client.save();
        // Client.create();
      },
    },
    // delete a client
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndDelete(args.id);
      },
    },
    // add project
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        details: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "not started" },
              progress: { value: "in progress" },
              completed: { value: "complete" },
            },
          }),
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          details: args.details,
          status: args.status,
          clientId: args.clientId,
        });
        return project.save();
      },
    },
    // delete a project
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        Project.find({ clientId: args.id }).then((projects) => {
          projects.forEach((project) => {
            project.remove();
          });
        });
        return Project.findByIdAndDelete(args.id);
      },
    },
    // update project
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        details: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatusUpdate",
            values: {
              new: { value: "not started" },
              progress: { value: "in progress" },
              completed: { value: "complete" },
            },
          }),
        },
      },

      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              details: args.details,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },
    // add user
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        photo: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const user = new User({
          name: args.name,
          phone: args.phone,
          email: args.email,
          password: args.password,
          photo: args.photo,
        });
        return user.save();
        // Client.create();
      },
    },
    // update user
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        phone: { type: GraphQLString },
        password: { type: GraphQLString },
        photo: { type: GraphQLString },
      },

      resolve(parent, args) {
        return User.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              phone: args.phone,
              password: args.password,
              photo: args.photo,
            },
          },
          { new: true }
        );
      },
    },
    // delete user
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return User.findByIdAndDelete(args.id);
      },
    },
    // add destination
    addDestination: {
      type: DestinationType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        country: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        photo: { type: GraphQLString },
        location: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          const destination = new Destination(args);
          return await destination.save();
        } catch (error) {
          throw new Error("Error adding destination");
        }
      },
    },
    // update Destination
    updateDestination: {
      type: DestinationType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        country: { type: GraphQLString },
        description: { type: GraphQLString },
        location: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          return await Destination.findByIdAndUpdate(
            args.id,
            {
              $set: {
                name: args.name,
                country: args.country,
                description: args.description,
                location: args.location,
              },
            },
            {
              new: true,
            }
          );
        } catch (error) {
          throw new Error("Error updating destination");
        }
      },
    },
    // delete destination
    deleteDestination: {
      type: DestinationType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        try {
          return await Destination.findByIdAndDelete(args.id);
        } catch (error) {
          throw new Error("Error deleting destination");
        }
      },
    },
    //add country
    addCountry: {
      type: CountryType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        photo: { type: GraphQLString },
        continentId: { type: GraphQLID },
      },
      resolve: async (parent, args) => {
        try {
          const country = new Country(args);
          return await country.save();
        } catch (error) {
          throw new Error("Error adding country");
        }
      },
    },
    // add tourspot
    addTourSpot: {
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
    },
    // delete tour spot
    deleteTourspot: {
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
    },
    // update tourspot
    updateTourspot: {
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
            // $set: {
            //   name: args?.name,
            //   description: args?.description,
            //   photo: args?.photo,
            //   cityId: args?.cityId,
            //   countryId: args?.countryId,
            //   divisionId: args?.divisionId,
            //   perfectTourTime: args?.perfectTourTime,
            //   howToGoThere: args?.howToGoThere,
            //   howToStayThere: args?.howToStayThere,
            //   howDoHere: args?.howDoHere,
            //   whereToEat: args?.whereToEat,
            //   tourTipsGuide: args?.tourTipsGuide,
            // },
          },
          { new: true }
        );
      },
    },
    addCity: {
      type: CityForAdd,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        photo: { type: GraphQLString },
        divisionId: { type: GraphQLID },
      },
      resolve: async (parent, args) => {
        try {
          const city = new City(args);
          return await city.save();
        } catch (error) {
          throw new Error("Error adding city");
        }
      },
    },
    addDivision: {
      type: DivisionType,
      args: {
        name: { type: GraphQLString },
        countryId: { type: GraphQLID },
        description: { type: GraphQLString },
        photo: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          const division = new Division(args);
          return await division.save();
        } catch (error) {
          throw new Error("Error adding division");
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
