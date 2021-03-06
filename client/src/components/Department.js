import React from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { Button, Icon, Grid } from "semantic-ui-react";
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

  handleDepartmentDelete = () => {
    const { id } = this.props.match.params;
    const remove = window.confirm(
      "Are you sure you want to delete this department?"
    );
    if (remove)
      axios
        .delete(`/api/departments/${id}`)
        .then(res => this.props.history.push("/departments"));
  };

  renderItems = () => {
    return this.state.items.map(i => (
      <ItemCard
        key={i.id}
        {...i}
        department_id={this.state.department.id}
        ItemRemove={this.removeItem}
      />
    ));
  };

  removeItem = id => {
    const remove = window.confirm("Are you sure you want to delete this item?");
    const dId = this.props.match.params.id;
    if (remove)
      axios.delete(`/api/departments/${dId}/items/${id}`).then(res => {
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
        <Link to={`/departments/${id}/edit`}>
          <Button icon color="blue">
            <Icon name="pencil" />
            Edit
          </Button>
        </Link>
        <Button
          icon
          color="red"
          onClick={() => this.handleDepartmentDelete(id)}
        >
          <Icon name="trash" />
          Delete Department
        </Button>
        <br />
        <HeaderText fSize="small">{description}</HeaderText>
        <br />
        <br />
        <Link to={`/departments/${id}/items/new`}>
          <Button style={{ marginBottom: "30px" }} color="blue">
            <Icon name="plus" />
            Add Item
          </Button>
        </Link>
        <br />
        <br />
        <Grid columns={4} centered>
          {this.renderItems()}
        </Grid>
      </div>
    );
  }
}

export default Department;
