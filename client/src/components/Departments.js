import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DepartmentCard from "./DepartmentCard";
import { Card, Button, Icon } from "semantic-ui-react";

class Departments extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments").then(res => {
      this.setState({ departments: res.data });
    });
  }

  renderDepartments = () => {
    const { id, name, description } = this.props.match.params;
    return this.state.departments.map(d => (
      <DepartmentCard key={d.id} {...d} />
    ));
  };

  render() {
    return (
      <div>
        <h1>Departments</h1>
        <br />
        <Link to="/departments/new">
          <Button icon color="green">
            <Icon name="add" />
            Add Department
          </Button>
        </Link>
        <br />
        <br />
        <Card.Group itemsPerRow={3}>{this.renderDepartments()}</Card.Group>
      </div>
    );
  }
}

export default Departments;
