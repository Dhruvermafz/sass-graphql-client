import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";

// Set up Apollo Client
const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
