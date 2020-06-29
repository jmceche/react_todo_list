import React, { useState } from "react";

const TodoItem = ({ index, todo, remTodo, editTodo, swapTodo }) => {
  const [crossed, setCrossed] = useState(false);
  const markComplete = (e) => {
    setCrossed(!crossed);
  };

  const handleClick = () => {
    remTodo(index);
  };

  const handleTodoEdit = (e) => {
    editTodo(e.target.value, index);
  };

  return (
    <div className='todo-item card'>
      <span className={crossed ? "crossed" : null}>
        <input type='checkbox' onChange={markComplete} />
        <input type='text' value={todo} onChange={handleTodoEdit} />
        <div className='move'>
          <button
            onClick={() => {
              swapTodo(index, "U");
            }}
          >
            &#x25B2;
          </button>
          <button
            onClick={() => {
              swapTodo(index, "D");
            }}
          >
            &#x25BC;
          </button>
        </div>
      </span>
      <button className='del-button' onClick={handleClick}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
