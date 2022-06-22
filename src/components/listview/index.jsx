import React from "react";
import PropType from "prop-types";
import { ListGroup, ListGroupItem, Input, Button } from "reactstrap";
// import Todos from "../todos";

// List Item Component
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <ListGroupItem className="d-flex  align-items-center">
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      ></Input>
      <div className="mx-3">
        <h4>{todo.text}</h4>
        <p>{todo.time.toDateString()}</p>
      </div>
      <Button
        className="ml-auto"
        color={todo.isComplete ? "danger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </ListGroupItem>
  );
};

ListItem.propType = {
  todo: PropType.object.isRequired,
  toggleSelect: PropType.func.isRequired,
  toggleComplete: PropType.func.isRequired,
};

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        ></ListItem>
      ))}
    </ListGroup>
  );
};
ListView.propType = {
  todos: PropType.object.isRequired,
  toggleSelect: PropType.func.isRequired,
  toggleComplete: PropType.func.isRequired,
};

export default ListView;
