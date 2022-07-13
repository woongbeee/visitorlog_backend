import { gql } from 'apollo-server';

const typeDefs = gql
   `type visitor {
    _id:ID
    count: Int
    firstname: String!
    lastname: String!
    mobile:Int!
    createAt:DateTime
    updateAt:DateTime
    }
    type Query {
    getVisitors: [visitor]
    }

    type Mutation {
    addVisitor(count:Int!, firstname: String!, lastname: String!, mobile: Int!): visitor
    deleteVisitor(_id:ID): String
    updateVisitor(_id:ID, firstname: String, lastname: String, mobile:Int): visitor
    }

scalar DateTime

`;
   

export default typeDefs;