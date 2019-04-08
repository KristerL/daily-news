import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: 'https://mrtns.ee/graphql'
})

export default client;