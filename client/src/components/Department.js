import React from "react";
import { Segment, Header, Button, Icon, Grid } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

class Department extends React.Component {
  state = {
    items: [],
    department: ""
  };

  // handleDelete = (id) => {
  //   axios.delete(`/api/items/${id}`)
  //   .then(res => {
  //     const {items} = this.state;
  //     this.setState({ items: items.filter( m => m.id !== id)})
  //   })
  // }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`/api/departments/${id}/products`)
      .then(res => {
        this.setState({ items: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getDepartment = () => {
    const { id } = this.props.match.params;
    axios.get(`/api/departments/${id}`).then(res => {
      this.setState({ department: res.data.name });
    });
  };

  renderItems = () => {
    return this.state.items.map(item => (
      <Grid.Column>
        <Segment textAlign="center">
          <Segment
            basic
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Button
              icon
              size="mini"
              color="orange"
              onClick={() => this.handleEdit(item.id)}
            >
              <Icon name="pencil" />
            </Button>
            <Button
              icon
              size="mini"
              color="red"
              onClick={() => this.handleDelete(item.id)}
            >
              <Icon name="trash" />
            </Button>
          </Segment>
          <Link to={`/items/${item.id}`}>
            <Header>{item.name}</Header>
            <Segment basic>${item.description}</Segment>
          </Link>
        </Segment>
      </Grid.Column>
    ));
  };
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Link to={`/departments/${id}/items/new`}>
          <Button style={{ marginBottom: "30px" }} color="blue">
            <Icon name="plus" />
            New Item
          </Button>
        </Link>
        <Grid columns={5} centered>
          {this.renderItems()}
        </Grid>
      </div>
    );
  }
}

export default Department;