import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (newtodo) => {
    setTodo([...todos, newtodo]);
  };

  const remTodo = (i) => {
    const newtodos = [...todos];
    setTodo(newtodos.filter((todo, index) => index !== i));
  };

  const editTodo = (edit, index) => {
    const newtodos = [...todos];
    newtodos[index] = edit;
    setTodo(newtodos);
  };

  const swapTodo = (ind, move) => {
    const newtodos = [...todos];
    switch (move) {
      case "U":
        if (ind > 0) {
          [newtodos[ind - 1], newtodos[ind]] = [
            newtodos[ind],
            newtodos[ind - 1],
          ];
        }
        break;
      case "D":
        if (ind < newtodos.length - 1) {
          [newtodos[ind], newtodos[ind + 1]] = [
            newtodos[ind + 1],
            newtodos[ind],
          ];
        }
        break;
      default:
        console.log("This shouldn't appear");
    }
    setTodo(newtodos);
  };

  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <div className='todo-header'>
            <h1>ToDo List</h1>
          </div>
          <AddTodo addTodo={addTodo} />
          <TodoList
            todos={todos}
            remTodo={remTodo}
            editTodo={editTodo}
            swapTodo={swapTodo}
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
