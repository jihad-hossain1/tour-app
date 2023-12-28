
const {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const Client = require("../models/Client");
const { ClientType } = require('../typeDef/typeDef');




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






module.exports = { deleteClient, addClient };

