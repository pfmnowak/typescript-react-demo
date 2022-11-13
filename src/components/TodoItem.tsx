import { ReactNode } from "react";

type TodoItemProps = {
  text: string;
  children?: ReactNode;
};

const TodoItem = (props: TodoItemProps) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
