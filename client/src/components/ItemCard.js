import React from "react";
import { Button, Icon, Grid, Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ItemCard = ({ id, name, description, price, image_url, remove }) => (
  <Grid.Column>
    <Segment textAlign="center">
      <Segment
        basic
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      />
      <Link to={`/items/${id}`}>
        <Header>{name}</Header>
        <Segment basic>${description}</Segment>
      </Link>
      <Button
        icon
        size="mini"
        color="orange"
        onClick={() => this.handleEdit(id)}
      >
        <Icon name="pencil" />
      </Button>
      <Button
        icon
        size="mini"
        color="red"
        onClick={() => this.handleDelete(id)}
      >
        <Icon name="trash" />
      </Button>
    </Segment>
  </Grid.Column>
);

export default ItemCard;
