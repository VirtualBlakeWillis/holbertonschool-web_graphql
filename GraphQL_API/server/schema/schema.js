// schema property 
const graphql = require('graphql');
const { GraphQLString, GraphQLInt, GraphQLSchema, GraphQLObjectType } = graphql;

// Task 0, create TaskType schema
let TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  })
});

// Task 1, create RootQuery schema
let RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        // code to get data from db / other source
      }
    }
  }
});

module.export = new GraphQLSchema({
  query: RootQuery
});
