import React from "react";
import { Form, Rating } from "semantic-ui-react";
import axios from "axios";

class ReviewForm extends React.Component {
  state = { title: "", body: "", author: "", rating: 0 };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleRating = (e, { rating }) => {
    this.setState({ rating });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`/api/items/${this.props.itemId}/reviews`, { ...this.state })
      .then(res => this.props.add(res.data));
    this.props.toggle();
  };

  render() {
    const { title, body, author, rating } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group width="equal">
            <Form.Input
              name="title"
              label="Title"
              placeholder="Title"
              required
              value={title}
              onChange={this.handleChange}
            />
            <Form.Input
              name="body"
              label="Body"
              placeholder="Body"
              value={body}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group width="equal">
            <Form.Input
              name="author"
              label="Author"
              placeholder="Author"
              value={author}
              onChange={this.handleChange}
            />
            <Rating
              name="rating"
              icon="star"
              defaultRating={1}
              maxRating={5}
              rating={rating}
              onRate={this.handleRating}
              size="huge"
              clearable
            />
          </Form.Group>
          <Form.Button color="pink">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default ReviewForm;
