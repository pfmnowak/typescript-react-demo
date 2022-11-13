import { ReactNode } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
type AppProps = {
  items: Todo[];
  children?: ReactNode;
};

const Todos = (props: AppProps) => {
  return (
    <ul>
      {props.children}
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
