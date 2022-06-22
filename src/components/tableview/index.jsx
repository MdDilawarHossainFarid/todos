import React from "react";
import PropType from "prop-types";
import { Input, Button, Table } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => (
  <tr>
    <th scope="row">
      <Input
        type="checkbox"
        id={todo.id}
        checked={todo.isSelect}
        onChange={() => toggleSelect(todo.id)}
      />
    </th>
    <td>{todo.time.toDateString()}</td>
    <td>{todo.text}</td>
    <td>
      <Button
        className="ml-auto"
        color={todo.isComplete ? "denger" : "success"}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Running"}
      </Button>
    </td>
  </tr>
);

RowItem.propType = {
  todo: PropType.object.isRequired,
  toggleSelect: PropType.func.isRequired,
  toggleComplete: PropType.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Time</th>
        <th>Todo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <RowItem
          key={todo.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleComplete={toggleComplete}
        />
      ))}
    </tbody>
  </Table>
);

TableView.propType = {
  todos: PropType.object.isRequired,
  toggleSelect: PropType.func.isRequired,
  toggleComplete: PropType.func.isRequired,
};

export default TableView;
