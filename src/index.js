import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import { store, persistor } from "./redux/store";
import { cache } from "./graphql/cache";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
