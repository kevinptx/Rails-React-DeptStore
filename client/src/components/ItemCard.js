import React from "react";
import { StyledGrid } from "./styles/Appstyles";
import { Link } from "react-router-dom";
import { Image, Button, Icon, Segment, Card } from "semantic-ui-react";
import { HeaderText } from "./styles/Appstyles";

const ItemCard = ({
  id,
  name,
  description,
  price,
  image_url,
  ItemRemove,
  department_id
}) => (
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
        <Segment basic>${price}</Segment>
        <HeaderText fontSize="large">{name}</HeaderText>
        <Segment basic>{description}</Segment>

        <div className="ui three buttons">
          <Link to={`/departments/${department_id}/items/${id}/`}>
            <Button icon size="mini" color="blue">
              Show
            </Button>
          </Link>
          <Link to={`/departments/${department_id}/items/${id}/edit`}>
            <Button icon size="mini" color="orange">
              <Icon name="pencil" />
            </Button>
          </Link>
          <Button icon size="mini" color="red" onClick={() => ItemRemove(id)}>
            <Icon name="trash" />
          </Button>
        </div>
      </Segment>
    </Card>
  </StyledGrid>
);

export default ItemCard;
