import { ReactNode } from "react";
type AppProps = {
  items: string[];
  children?: ReactNode;
};

const Todos = (props: AppProps) => {
  return (
    <ul>
      {props.children}
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
