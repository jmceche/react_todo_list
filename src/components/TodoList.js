import React from "react";
import TodoItem from "./TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TodoList = ({ todos, remTodo, editTodo, swapTodo }) => {
  return (
    <div className='todo-list'>
      <TransitionGroup>
        {todos.map((todo, index) => (
          <CSSTransition key={index} timeout={500} classNames='item'>
            <TodoItem
              editTodo={editTodo}
              key={index}
              index={index}
              todo={todo}
              remTodo={remTodo}
              swapTodo={swapTodo}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;
