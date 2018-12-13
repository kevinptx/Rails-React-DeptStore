import React from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { Segment, Header, Button, Icon, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { HeaderText } from "./styles/Appstyles";
class Department extends React.Component {
  state = {
    items: [],
    department: {}
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
    const remove = window.confirm(
      "Are you sure you want to delete this department?"
    );
    if (remove)
      axios.delete(`/api/departments/${id}`).then(res => {
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

  renderItems = () => {
    const { id, name } = this.props.match.params;
    return this.state.items.map(i => (
      <ItemCard key={i.id} {...i} remove={this.removeItem} />
    ));
  };

  removeItem = id => {
    const remove = window.confirm("Are you sure you want to delete this item?");
    const deptId = this.props.match.params.id;
    if (remove)
      axios.delete(`/api/departments/${deptId}/items/${id}`).then(res => {
        const items = this.state.items.filter(i => {
          if (i.id !== id) return i;
        });
        this.setState({ items });
      });
  };

  render() {
    const {
      department: { id, name, description }
    } = this.state;
    return (
      <div>
        <HeaderText fSize="large">{name}</HeaderText>
        <Button icon color="blue">
          <Icon name="pencil" />
          Edit
        </Button>
        <Button icon color="red" onClick={() => this.handleDelete(id)}>
          <Icon name="trash" />
          Delete
        </Button>
        <br />
        <HeaderText fSize="small">{description}</HeaderText>
        <br />
        <br />
        <Link to={`/departments/${id}/items/new`}>
          <Button style={{ marginBottom: "30px" }} color="blue">
            <Icon name="plus" />
            New Item
          </Button>
        </Link>

        <Grid columns={3} centered>
          {this.renderItems()}
        </Grid>
      </div>
    );
  }
}

export default Department;
