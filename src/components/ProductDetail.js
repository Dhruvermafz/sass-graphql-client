import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Card, Spinner, Alert } from "react-bootstrap";

const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      price
      stock
      created_at
      updated_at
    }
  }
`;

function ProductDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">Error: {error.message}</Alert>;

  const product = data.product;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>
          <strong>Price: </strong>${product.price}
        </Card.Text>
        <Card.Text>
          <strong>Stock: </strong>
          {product.stock}
        </Card.Text>
        <Card.Text>
          <strong>Created at: </strong>
          {new Date(product.created_at).toLocaleString()}
        </Card.Text>
        <Card.Text>
          <strong>Updated at: </strong>
          {new Date(product.updated_at).toLocaleString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductDetail;
