import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { Table, Spinner, Alert } from "react-bootstrap";

const GET_PRODUCTS = gql`
  query GetProducts {
    allProducts {
      id
      name
      price
      stock
    }
  }
`;

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">Error: {error.message}</Alert>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {data.allProducts.map((product) => (
          <tr key={product.id}>
            <td>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
