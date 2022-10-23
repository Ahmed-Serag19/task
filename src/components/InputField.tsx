import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  newTodo: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, newTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        newTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
