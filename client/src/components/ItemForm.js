import React from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = { name: "", description: "", price: "", image_url: "" };

  handleChange = e => {
    const { name, value } = e.target;
    //here [name] is being used as an object key instead of as a string
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios
      .post(`/api/departments/${id}/items`, { ...this.state })
      .then(res => this.props.history.push(`/departments/${id}`));
  };

  render() {
    const { name, description, price, image_url } = this.state;

    return (
      <div>
        <h1>Add Item</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              name="name"
              placeholder="Name"
              label="Name"
              required
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              name="description"
              placeholder="Description"
              label="Description"
              required
              value={description}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              name="price"
              placeholder="Price"
              label="Price"
              required
              value={price}
              onChange={this.handleChange}
            />
            <Form.Input
              name="image_url"
              placeholder="Image Url"
              label="Image Url"
              required
              value={image_url}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="green">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default ItemForm;
