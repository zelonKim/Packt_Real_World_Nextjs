import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

let uri = 'https://rwnjssignbook.herokuapp.com/v1/graphql';

let apolloClient;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // use the same Apollo instance for both client and server
        link: new HttpLink({ uri }),
        cache: new InMemoryCache(),
    })
}


export function initApollo(initialState = null) { // initialize the Apollo client

    const client = apolloClient || createApolloClient()

    if (initialState) {
        client.cache.restore({
            ...client.extract(),
            ...initialState
        }) // 'initialState' will be merged with the local cache to restore a full representation of state 
    }

    if (typeof window === "undefined") {
        return client;
    }

    if (!apolloClient) {
        apolloClient = client;
    }

    return client;
} // avoid recreating a new Apollo Client for each page
// store a client instance on the server 



export function useApollo(initialState) {
    return useMemo(
        () => initApollo(initialState),
        [initialState]
    )
}

