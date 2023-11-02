import React, { useState } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

export const ExerciseHeader = ({ onAddTodo }: TodoInputProps) => {
  
  const [todoText, setTodoText] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  
  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      onAddTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <>
    <h1>Todo-or-not</h1>
    <input
        type="text"
        placeholder="Insert new task"
        value={todoText}
        onChange={handleInputChange}
        style={{
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          color: '#879793',
          marginRight: '8px',
          width: '90%',
          backgroundColor: '#D5DBDA',
        }}
        />
      {/* the add button */}
      <button onClick={handleAddTodo}>
        Add Task
      </button>
    {/* <div className='main-page'>
      <h1>Todo-or-not</h1>
      <form>
        <h2 className='main-title-wrapper'/>
          <label htmlFor="new-todo-input" className="header"/>
            <p>List your tasks {todoText}</p>

        <input type="text" id="new-todo-input" className="header" name="text" autoComplete="off" onChange={handleInputChange}/>

        <button type="submit" className="btn btn__primary btn__lg" onClick={handleAddTodo}>
          Add Task
        </button>
      </form>
    </div> */}
    <></>
    {/* <input className='header' type="text" id="name" name="name" onChange={handleType}/> */}
    </>
  );
}