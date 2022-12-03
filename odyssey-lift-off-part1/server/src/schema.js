const { gql } = require('appolo-server')

const typeDefs = gql`

type Query{
    tracksForHome:[Track!]!
}

type Track{
    id: Int!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount:Int
}

type Author{
    id: ID!
    name: String!
    photo: String
}
`;

module.exports = typeDefs;