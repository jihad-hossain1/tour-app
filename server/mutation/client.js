
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

const Client = require("../models/Client");
const { ClientType, ProjectType } = require('../typeDef/typeDef');




const addClient = {
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
    };



const deleteClient = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return Client.findByIdAndDelete(args.id);
  },
};





    



 let  wpClients = {
      type: new GraphQLList(ClientType),
      resolve: async (parent, args) => {
        try {
          let allClients = await Client.find();
          return allClients;
        } catch (error) {
          console.log("failed to fetch: ", error);
        }
      },
    }




module.exports = { deleteClient, addClient,wpClients };