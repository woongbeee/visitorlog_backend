import express from 'express';
import cors from 'cors';
import { ApolloServer } from "apollo-server-express";
import  typeDefs  from './typeDefs.js';
import  resolvers  from './resolver.js';
import connection from './model/db.js';




const DB = connection();
const app = express();
app.use(cors());



const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground:true
});

await apolloServer.start();

const corsOptions = {
    origin: [" https://woongbeee.github.io/visitorlog_react/", "https://studio.apollographql.com"]
};

apolloServer.applyMiddleware({
    app,
    cors: corsOptions,
    path: "/graphql",
});

const PORT = process.env.PORT || 3000;


app.listen(process.env.PORT || 3000, () =>
      console.log(`CORS-enabled web server listening ${PORT}`)
);
