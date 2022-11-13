import { ReactNode, useRef } from "react";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
  children?: ReactNode;
};

const NewTodo = (props: NewTodoProps) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an errow
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
