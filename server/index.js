const express = require('express');
require('dotenv').config();
const cors = require('cors')
const color = require('colors');
const connectDB = require('./config/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

connectDB();
const app = express();
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
