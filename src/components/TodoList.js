import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, remTodo, editTodo, swapTodo }) => {
  return (
    <div className='todo-list'>
      {todos.map((todo, index) => (
        <TodoItem
          editTodo={editTodo}
          key={index}
          index={index}
          todo={todo}
          remTodo={remTodo}
          swapTodo={swapTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
