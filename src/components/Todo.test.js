import React from "react";
import { create } from "react-test-renderer";
import Todo from "./Todo";

const todo = {
  id: "t0",
  task: "Complete tutorial on React hooks and state",
  complete: false,
  dueDate: new Date("July 9, 2019 00:00"),
  selected: false,
};

test("render correctly Todo Component", () => {
  const todoComponent = create(<Todo todo={todo} />).toJSON();
  expect(todoComponent).toMatchSnapshot();
});
