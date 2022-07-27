import React from "react";
import { Todos } from "../models/Todo";
import TodoItem from "./TodoItem";

interface Props {
  todos?: Todos;
}

const TodoList: React.FC<Props> = ({ todos = [] }) => {
  return (
    <div className="flex flex-col grow items-center mx-auto max-w-screen-xl overflow-y-scroll">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
