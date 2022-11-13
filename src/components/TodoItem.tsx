import { ReactNode } from "react";
import classes from "./TodoItem.module.css";

type TodoItemProps = {
  text: string;
  onClickTodo: () => void;
  children?: ReactNode;
};

const TodoItem = (props: TodoItemProps) => {
  return (
    <li className={classes.item} onClick={props.onClickTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
