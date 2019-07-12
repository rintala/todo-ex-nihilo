import React from "react";
import { useReducer } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoContext from "./components/Provider";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const initialState = [
  {
    id: "t0",
    task: "Setup personal blog in Gatsby",
    complete: false,
    dueDate: new Date("July 9, 2019 00:00"),
    selected: false,
  },
  {
    id: "t1",
    task: "Write first blog post",
    complete: false,
    dueDate: null,
    selected: false,
  },
  {
    id: "t2",
    task: "Plan summer vacation",
    dueDate: new Date("July 6, 2019 00:00"),
    complete: true,
    selected: false,
  },
  {
    id: "t3",
    task: "Schedule meeting about investment portfolio",
    dueDate: new Date("June 29, 2019 00:00"),
    complete: false,
    selected: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("REDUCER received add action.. ");
      return state.concat({
        task: action.task,
        id: action.id,
        complete: false,
        dueDate: null,
        selected: false,
      });

    case "DO_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });

    case "UNDO_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });

    case "SELECT_OR_UNSELECT":
      return state.map(todo => {
        if (todo.selected) {
          if (todo.id === action.id) {
            return { ...todo, selected: !todo.selected };
          } else {
            return { ...todo, selected: false };
          }
        } else if (!todo.selected && todo.id === action.id) {
          return { ...todo, selected: !todo.selected };
        } else {
          return todo;
        }
      });

    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);

    default:
      throw new Error();
  }
};

const TextHeader = ({ text, color }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(85, 76, 93, 0.965)",
      }}
    >
      <h3
        style={{
          color: color,
          marginBottom: "auto",
          borderStyle: "solid",
          borderColor: color,
        }}
        className="textHeader"
      >
        {text}
      </h3>
    </div>
  );
};

const TextAdd = ({ text, color }) => {
  return (
    <div
      style={{
        backgroundColor: "#554c5df6",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <h3
        style={{
          color: color,
          marginBottom: "auto",
        }}
        className="textHeader"
      >
        {text}
      </h3>
    </div>
  );
};

function App() {
  const [todos, dispatchTodos] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={dispatchTodos}>
      <div className="App">
        <div className="AppHeader">
          <h1>todo-ex-nihilo</h1>
        </div>

        <div id="todosWrapper">
          <Todos todos={todos} />
        </div>
        <div id="addWrapper">
          {todos.every(td => td.complete) ? (
            <TextHeader color="green" text="status" />
          ) : (
            <TextHeader color="red" text="status" />
          )}
          <TextAdd text="Add a new item" color="#ffa3d5" />
          <AddTodo />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
