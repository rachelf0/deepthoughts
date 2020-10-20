import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
