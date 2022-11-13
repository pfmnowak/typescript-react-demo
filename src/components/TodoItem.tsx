import { ReactNode } from "react";
import classes from "./TodoItem.module.css";

type TodoItemProps = {
  text: string;
  children?: ReactNode;
};

const TodoItem = (props: TodoItemProps) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
