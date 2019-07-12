import React from "react";
import { create } from "react-test-renderer";

/*import ReactDOM from 'react-dom';*/
import App from "./App";
import Todo from "./components/Todo";

const todo = {
  id: "t0",
  task: "Complete tutorial on React hooks and state",
  complete: false,
  dueDate: new Date("July 9, 2019 00:00"),
  selected: false,
};

test("is first todo being sent in of id 't0'", () => {
  const todoComp = create(<Todo todo={todo} />);
  const testInstanceTodos = todoComp.root;
  const todoID = testInstanceTodos.findByType(Todo).props.todo.id;
  expect(todoID).toBe("t0");
});

test("is number of keys in todo prop 5", () => {
  const todoComponent = create(<Todo todo={todo} />);
  const testInstanceTodos = todoComponent.root;
  const keysInTodoProp = Object.keys(
    testInstanceTodos.findByType(Todo).props.todo,
  );
  expect(keysInTodoProp.length).toBe(5);
});

test("is equal to 1", () => {
  const number = 1;
  expect(number).toBe(1);
});
