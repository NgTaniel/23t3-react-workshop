import { useState } from 'react';

interface TodoItemProps {
  text: string;
  onDelete: () => void;
}

const TodoItem = ({ text, onDelete }: TodoItemProps) => {
  const [completed, setCompleted] = useState(false);
  // const [updateData, setUpdateData] = useState(false);
   
  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  // each item is in its own card
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    width: '90%',
    margin: 'auto',
    marginBottom: '10px',
    marginTop: '10px',
    color: completed ? '#B6C7C3' : '#879793',
    backgroundColor: completed ? '#E9EEEE' : '#D5DBDA',
    textDecoration: completed ? 'line-through' : 'none',
  };
  
  return (
    <div style={cardStyle}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
        <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          padding: '0',
          color: '#3A6D9B',
          top:'50%',
          float: 'right',
          marginTop: '3px',
          marginBottom: '10px',
          width:'auto',
          display:'inline-block'
        }}
        >Edit</button>
        <button onClick={handleDeleteClick}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: '0',
            color: '#3A6D9B',
            top:'50%',
          float: 'right',
          marginTop: '3px',
          marginBottom: '10px',
          width:'auto',
          display:'inline-block'
            // float: 'right',
            // marginTop: '3px',
            // marginBottom: '10px',
          }}
        >Delete</button>
        
    </div>
  );
};

export default TodoItem;
