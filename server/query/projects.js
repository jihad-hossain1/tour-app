const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");
const { ProjectType } = require("../typeDef/typeDef");
const Project = require("../models/Project");


let projects = {
    type: new GraphQLList(ProjectType),
    resolve: async (parent, args) => {
        return await Project.find();
    },
}
let project= {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    }


    


module.exports = {projects,project}
