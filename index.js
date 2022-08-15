import express from 'express';
import cors from 'cors';
import { ApolloServer } from "apollo-server-express";
import  typeDefs  from './typeDefs.js';
import  resolvers  from './resolver.js';
import connection from './model/db.js';
import path from 'path';




const DB = connection();
const app = express();
app.use(cors());



const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
apolloServer.applyMiddleware({ app });
const PORT = process.env.PORT || 5000;


app.listen(process.env.PORT || 5000, () =>
      console.log(`CORS-enabled web server listening ${PORT}`)
);
