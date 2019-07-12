import React from "react";
import { useState, useContext } from "react";
import "./../App.css";
import uuid from "uuid";
import TodoContext from "./Provider";

const AddTodo = () => {
  const dispatch = useContext(TodoContext);
  const [task, setTask] = useState("");
  const handleSubmit = event => {
    if (task) {
      dispatch({ type: "ADD_TODO", task, id: uuid() });
    }
    console.log("dispatched: ", task);
    setTask("");
    event.preventDefault();
  };

  const handleChangeInput = event => setTask(event.target.value);

  return (
    <div id="submitTodosWrapper">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="taskinput">NEW TASK:</label> */}
        <input
          id="taskinput"
          type="text"
          value={task}
          onChange={handleChangeInput}
          style={{
            marginLeft: "20px",
            marginBottom: "15px",
          }}
        />
        <button
          id="submitNewTodoButton"
          type="submit"
          style={{ marginLeft: "15px" }}
        >
          <h3>ADD THE TASK</h3>
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
