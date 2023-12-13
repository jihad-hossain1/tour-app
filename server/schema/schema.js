const Project = require("../models/Project");
const Client = require("../models/Client");
const User = require("../models/User");
const Destination = require("../models/Destination");
const Country = require("../models/Country");
const TourSpot = require("../models/TourSpot");
const Continent = require("../models/Continent");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// project type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    details: { type: GraphQLString },
    status: { type: GraphQLString },
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
// Continent Type
const ContinentType = new GraphQLObjectType({
  name: "Continent",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    countries: {
      fields: ()=>({
      type: [CountryType],
        resolve: async (isCountryCode) => {
          let totalCountry = await Country.find();
         return  totalCountry?.filter(item =>item?.countryCode === isCountryCode)
      }

    })
    }
  }),
});
// country type
const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    touristSpots: { type: GraphQLString },
    continent: {
      type: ContinentType,
      resolve: (parent, args) => {
        return Continent.findById(parent.continent);
      },
    },
    description: { type: GraphQLString },
    division: { type: GraphQLString },
    photo: { type: GraphQLString },
    countryCode: { type: GraphQLString }
  }),
});
// tour spot type
const TourSpotType = new GraphQLObjectType({
  name: "TourSpot",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    country: {
      type: CountryType,
      resolve: (parent, args) => {
        return Country.findById(parent.countryId);
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
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
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
        touristSpots: { type: GraphQLString },
        continent: { type: GraphQLID },
        description: { type: GraphQLString },
        division: { type: GraphQLString },
        photo: { type: GraphQLString },
        countryCode: { type: GraphQLString }
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
        countryId: { type: GraphQLID },
        description: { type: GraphQLString },
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
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
