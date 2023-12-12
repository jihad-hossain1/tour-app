import { ClientType } from "../schema/typeDefs";

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// add a client
export const addClient = {
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
// delete a client
export const deleteClient = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return Client.findByIdAndDelete(args.id);
  },
};
