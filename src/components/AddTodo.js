import React, { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({ value: text, id: nanoid() });
    setText("");
  };

  return (
    <div className='add-todo'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='todo'
          id='todo'
          placeholder='Add To-Do'
          value={text}
          onChange={onChange}
          required
        />
        <button className='add-button' type='submit'>
          +
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
