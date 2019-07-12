import Todo from "./Todo";
import React from "react";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, i) =>
        i === todos.length - 1 ? (
          <Todo key={i} todo={todo} isLast={true} />
        ) : (
          <Todo key={i} todo={todo} isLast={false} />
        ),
      )}
    </div>
  );
};

export default Todos;
