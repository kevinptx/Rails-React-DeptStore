import React from "react";
import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DepartmentCard = ({ id, name, description }) => (
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content textAlign="center">
      <Link key={id} to={`/departments/${id}`}>
        <Button color="blue">View</Button>
      </Link>
    </Card.Content>
  </Card>
);

export default DepartmentCard;
