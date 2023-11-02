import React, { useState } from 'react';
import { ExerciseHeader } from './ExerciseHeader';
import { TodoList } from './ExerciseBody';
import { taskData } from './Data'
  
export const ExercisePage: React.FC = () => {
    const [todos, setTodos] = useState<string[]>(taskData);

    const handleAddTodo = (text: string) => {
      setTodos([...todos, text]);
    };
    
    const handleDeleteTodo = (index: number) => {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    };

    return(
        <div>
            {/* <p>peepeepoopoo</p> */}
            {/* <ExerciseHeader name='string'/> */}
            {/* <ExerciseHeader/> */}

            {/* the header component */}
            <div className="addtask">
              <ExerciseHeader onAddTodo={handleAddTodo} />
            </div>

      {/* the list component */}
      <div className="listtask">       
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      </div>
        </div>
        
    );
}

