import React from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";

class ItemForm extends React.Component {
  state = { name: "", description: "", price: "", image_url: "" };

  componentDidMount() {
    const { id, itemId } = this.props.match.params;
    if (itemId)
      axios
        .get(`/api/departments/${id}/items/${itemId}`)
        .then(res => this.setState({ ...res.data }));
  }

  handleChange = e => {
    const { name, value } = e.target;
    //here [name] is being used as an object key instead of as a string
    this.setState({ [name]: value });
    //the above accomplishes the same code as:
    // switch (name) {
    //   case "name":
    //     this.setState({ name: value });
    //   case "description":
    //     this.setState({ description: value });
    //   case "price":
    //     this.setState({ price: value });
    //   case "image_url":
    //     this.setState({ image_url: value });
    // }
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { id, itemId } = this.props.match.params;
    // const { push } = this.props.history;
    // the below code accomplishes the same in one line:
    const {
      match: {
        params: { id, itemId }
      },
      history: { push }
    } = this.props;

    if (itemId) {
      axios
        .put(`/api/departments/${id}/items/${itemId}`, { ...this.state })
        .then(res => push(`/departments/${id}`));
    } else {
      axios
        .post(`/api/departments/${id}/items`, { ...this.state })
        .then(res => push(`/departments/${id}`));
    }
  };

  render() {
    const { name, description, price, image_url } = this.state;
    const { id, itemId } = this.props.match.params;
    return (
      <div>
        <h1>{itemId ? "Edit Item" : "Add Item"}</h1>
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
