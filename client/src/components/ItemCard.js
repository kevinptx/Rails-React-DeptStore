import React from "react";
import { StyledGrid } from "./styles/Appstyles";

import {
  Image,
  Button,
  Icon,
  Grid,
  Segment,
  Header,
  Card
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const ItemCard = ({ id, name, description, price, image_url, remove }) => (
  <StyledGrid>
    <Card>
      <Segment textAlign="center">
        <Segment
          basic
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        />
        <Image src={image_url} />
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
    </Card>
  </StyledGrid>
);

export default ItemCard;
