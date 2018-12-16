import React from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  state = { name: "", description: "" };

  componentDidMount() {
    if (this.props.edit)
      axios
        .get(`/api/departments/${this.props.match.params.id}`)
        .then(res => this.setState({ ...res.data }));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.edit) {
      axios
        .put(`/api/departments/${this.props.match.params.id}`, {
          ...this.state
        })
        .then(res => this.props.history.push(`/departments/${res.data.id}`));
    } else {
      axios
        .post(`/api/departments`, { ...this.state })
        .then(res => this.props.history.push(`/departments/${res.data.id}`));
    }
  };

  // The input fields are tied to a piece of state. The important thing to know is that these inputs are a reflection of what our state is, not the other way around. Whatever our state is is what the value of these input fields will be due to the value attribute. It's checking to see what the value of the field is and making the value of this field the value of our state. By default they're empty. If the axios call goes through, it becomes whatever the database actually shows/has in it in its current state.

  render() {
    const { name, description } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          placeholder="Name"
          label="Name"
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input
          name="description"
          placeholder="Description"
          label="Description"
          value={description}
          onChange={this.handleChange}
        />
        <Form.Button color="green">Submit</Form.Button>
      </Form>
    );
  }
}

export default DepartmentForm;
