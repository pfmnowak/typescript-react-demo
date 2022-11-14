import { useContext, useRef, useState } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo = () => {
  const [todoText, setTodoText] = useState("");
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const formIsFilled: boolean = todoText.length > 0;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input
        ref={todoTextInputRef}
        type="text"
        id="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button disabled={!formIsFilled}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
