import express from 'express';
import { ApolloServer } from "apollo-server-express";
import  typeDefs  from './typeDefs.js';
import  resolvers  from './resolver.js';
import connection from './model/db.js';





const DB = connection();
const app = express();
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
apolloServer.applyMiddleware({ app });
const PORT = process.env.PORT | 8001;


app.listen(PORT, () =>
    console.log(`Express server is running on port ${PORT}`)
);
