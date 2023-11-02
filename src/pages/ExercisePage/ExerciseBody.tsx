import TodoItem from './TodoItem'

interface TodoListProps {
    todos: string[];
    onDeleteTodo: (index: number) => void;
  }
  
export const TodoList = ({ todos, onDeleteTodo }: TodoListProps) => {
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <TodoItem text={todo} onDelete={() => onDeleteTodo(index)} />
          </li>
        ))}
      </ul>
    );
  };


