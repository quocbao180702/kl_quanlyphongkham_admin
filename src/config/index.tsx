import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { getJwtToken } from "../utils/jwt";
import { getMainDefinition } from "@apollo/client/utilities";
/* import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws'; */
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3000/graphql`,
  options: {
    reconnect: true
  }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const authLink = setContext((_, { headers }) => {
  const token = getJwtToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

export default client;
