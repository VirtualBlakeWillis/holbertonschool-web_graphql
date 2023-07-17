// schema property 
const graphql = require('graphql');
const { GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

let TaskType = new GraphQLSchema({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  })
});
