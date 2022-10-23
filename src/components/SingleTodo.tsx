import React, { useState, useEffect, useRef } from 'react';
import { Todo } from '../model';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
  todo: Todo;
  todosContainer: Todo[];
  setTodosContainer: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({
  todo,
  todosContainer,
  setTodosContainer,
}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodosContainer(
      todosContainer.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodosContainer(
      todosContainer.filter((todo) => todo.id !== id)
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodosContainer(
      todosContainer.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="todos__single"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
