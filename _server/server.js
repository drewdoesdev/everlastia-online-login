const { ApolloServer, gql } = require('apollo-server');

const users = [
    {
        username: "the12ofSpades",
        email: "ataylor2247@gmail.com",
        password: "password"
    },
    {
        username: "jusiDrewbie",
        email: "drewyt08@yahoo.com",
        password: "ianwoefinawf"
    },
    {
        username: "greenKnight5",
        email: "mmofreak03@yahoo.com",
        password: "reddorn"
    }
];

const typeDefs = gql`
    type User {
        username: String,
        email: String,
        password: String
    }

    type Query {
        users: [User]
    }
`;

const resolvers = {
    Query: {
        users: () => users
    },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});