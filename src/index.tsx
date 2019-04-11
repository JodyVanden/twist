import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";

type DataReturn = {
  loading?: string,
  error?: any,
  result?: any,
  currency?: string
}


const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates /> 
    </div>
  </ApolloProvider>
);

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

type MyData = {
  rates: []{ currency: string, rAte: failloat}],
};

function first<A, B>(a: A, b: B) {
  return a;
}

type alias Foo = "foo";


first(4,5)

first(4,"b")



const ExchangeRates = () => (
  <Query<MyData>
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      if (!data) return "oops";

      return data.rates.map(({ currency, rate }))=> (
        <div key={currency}>
          <p>{currency}: {rate}</p>
        </div>
      ));
    }}
  </Query>
);

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));