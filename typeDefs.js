import { gql } from 'apollo-server';

const typeDefs = gql
   `type visitor {
    _id:ID
    firstname: String
    lastname: String
    mobile:String
    createAt:String
    }

    type Query {
    getVisitors: [visitor]
    }

    type Mutation {
    addVisitor(firstname: String!, lastname: String!, mobile: String!,createAt:String!): visitor
    deleteVisitor(_id:ID): visitor
    updateVisitor(_id:ID, firstname: String!, lastname: String!, mobile:String!): visitor
    }

scalar DateTime

`;
   

export default typeDefs;