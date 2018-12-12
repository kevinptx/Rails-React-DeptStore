import React from "react";
import { Segment, Header, Button, Icon, Grid } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

class Department extends React.Component {
  state = {
    items: [],
    department: {}
    // editing: false,
    // deleting: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/departments/${id}`).then(res => {
      this.setState({ department: res.data });
    });

    axios
      .get(`/api/departments/${id}/items`)
      .then(res => {
        this.setState({ items: res.data });
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  handleDelete = () => {
    const { id } = this.props.match.params;
    axios.delete(`/api/items/${id}`).then(res => {
      this.props.history.push("/departments");
    });
  };

  toggleEdit = () => this.setState({ editing: !this.state.editing });

  handleEdit = id => {
    axios
      .get(`/api/items/${id}`)
      .then(res => {
        const { items } = this.state;
        this.setState({ departments: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // listItems = () => {
  //   const { id } = this.props.match.params;
  //   return this.state.items.map(i => (
  //     <div>
  //       <Link to={`/departments/${id}/items/${i.id}`}>
  //         <li>{i.name}</li>
  //       </Link>
  //       <p>${i.price}</p>
  //     </div>
  //   ));
  // };

  renderItems = () => {
    const { id, name } = this.props.match.params;
    return this.state.items.map(i => (
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
          <Link to={`/items/${i.id}`}>
            <Header>{i.name}</Header>
            <Segment basic>${i.description}</Segment>
          </Link>
          <Button
            icon
            size="mini"
            color="orange"
            onClick={() => this.handleEdit(i.id)}
          >
            <Icon name="pencil" />
          </Button>
          <Button
            icon
            size="mini"
            color="red"
            onClick={() => this.handleDelete(i.id)}
          >
            <Icon name="trash" />
          </Button>
        </Segment>
      </Grid.Column>
    ));
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <h1>{this.state.department.name}</h1>;
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
