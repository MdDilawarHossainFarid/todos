import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Input, Button } from "reactstrap";

class TodoForm extends React.Component {
  state = {
    text: "",
    description: "",
  };

  handelChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
    event.target.reset();
    this.setState({ text: "", description: "" });
  };

  render() {
    const { text, description } = this.state;
    return (
      <Form onSubmit={this.handelSubmit}>
        <FormGroup>
          <label>Enter Task</label>
          <Input
            placeholder="do same code"
            name="text"
            value={text}
            onChange={this.handelChange}
          />
        </FormGroup>
        <FormGroup>
          <label>Describe Task</label>
          <Input
            type="textarea"
            placeholder="write some sort description about your task"
            name="description"
            value={description}
            onChange={this.handelChange}
          />
        </FormGroup>
        <Button type="submit">Create Task</Button>
      </Form>
    );
  }
}

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoForm;
