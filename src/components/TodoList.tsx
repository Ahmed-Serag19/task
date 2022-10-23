import React from 'react';
import './styles.css';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todosContainer: Todo[];
  setTodosContainer: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todosContainer, setTodosContainer }: Props) => {
  return (
    <div className="todos">
      {todosContainer.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todosContainer={todosContainer}
          setTodosContainer={setTodosContainer}
        />
      ))}
    </div>
  );
};

export default TodoList;
