// Initalize Express server with express-graphql as middleware
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const url = 'mongodb+srv://admin:admin@cluster0.6ivkslo.mongodb.net/?retryWrites=true&w=majority';

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});


// Task 6, connecting to MongoDB
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
console.log('connected to database');
});
