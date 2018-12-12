import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";

class Departments extends React.Component {
  state = { departments: [] };

  componentDidMount() {
    axios.get("/api/departments").then(res => {
      this.setState({ departments: res.data });
    });
  }

  renderDepts = () => {
    return this.state.departments.map(department => (
      <Link key={department.id} to={`/departments/${department.id}`}>
        <li>{department.name}</li>
      </Link>
    ));
  };

  render() {
    return (
      <div>
        <h2>Departments</h2>
        <ul>{this.renderDepts()}</ul>
      </div>
    );
  }
}

export default Departments;
