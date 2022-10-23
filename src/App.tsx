import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todosContainer, setTodosContainer] = useState<Todo[]>([]);

  const newTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodosContainer([
        ...todosContainer,
        { id: todosContainer.length + 1, todo, isDone: false },
      ]);
      setTodo('');
    }
  };

  console.log(todosContainer);
  return (
    <div className="App">
      <>
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} newTodo={newTodo} />
        <TodoList
          todosContainer={todosContainer}
          setTodosContainer={setTodosContainer}
        />
      </>
    </div>
  );
};

export default App;
