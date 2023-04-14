import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App'
import { Provider } from 'react-redux'
import store from '@/store/store'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

export default function index() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  )
}
