import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import {setContext} from '@apollo/client/link/context'
import { getJwtToken } from "../utils/jwt";
/* import JWTManager from '../utils/jwt'; */

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include' //gửi toàn bộ cookie đi 
});

const authLink = setContext((_, { headers }) => {
  const tokentest = getJwtToken();
  return {
    headers: {
      ...headers,
      authorization: tokentest ? `Bearer ${tokentest}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client 