import { ReactNode, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

type TodosProps = {
  children?: ReactNode;
};

const Todos = (props: TodosProps) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {props.children}
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClickTodo={() => todosCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
