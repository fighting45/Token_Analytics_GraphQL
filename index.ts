import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
    #This "Book" type defines the queryable fields for every book in our data source.
    
    type Book {
    title: String
    author: String
    }

    # The "Query" type is special: it lists all the available queries that 
    # clients can execute, along with the return type for each. 

    type Query {
    books: [Book]
    }
`;
