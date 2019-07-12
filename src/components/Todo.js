import React from "react";
import { useContext } from "react";
import "./../App.css";
import TodoContext from "./Provider";

const Todo = ({ todo, isLast }) => {
  const dispatch = useContext(TodoContext);

  const handleButtonCompleteClick = event => {
    dispatch({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id,
    });

    event.preventDefault();
  };

  const handleButtonRemoveClick = event => {
    dispatch({
      type: "REMOVE",
      id: todo.id,
    });

    event.preventDefault();
  };

  const handleCardClick = event => {
    dispatch({
      type: "SELECT_OR_UNSELECT",
      id: todo.id,
    });

    event.preventDefault();
  };

  return (
    <div
      key={todo.id}
      className={
        !isLast
          ? todo.selected
            ? "todoCardSelected"
            : "todoCard"
          : todo.selected
          ? "todoCardSelected todoCardSelectedLast"
          : "todoCard todoCardLast"
      }
      onClick={handleCardClick}
      onDoubleClick={handleButtonCompleteClick}
    >
      <div className="cardHeader">
        <li style={{ fontSize: "20px", fontWeight: "bold" }}>
          Task: {todo.task}
        </li>
        <button className="btnRemove" onClick={handleButtonRemoveClick}>
          X
        </button>
      </div>
      <ul>
        <li>ID: {todo.id}</li>
        {todo.dueDate !== null ? (
          <li>Deadline: {todo.dueDate.toString()}</li>
        ) : null}
        <li>Completed: {todo.complete.toString()}</li>
      </ul>
      <div className="cardFooter">
        {todo.complete ? (
          <button
            className="btnIsCompleted"
            onClick={handleButtonCompleteClick}
          >
            ✓
          </button>
        ) : (
          <button
            className="btnIsNotCompleted"
            onClick={handleButtonCompleteClick}
          >
            ✓
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
