import React from "react";
import { Todos } from "../models/Todo";
import TodoItem from "./TodoItem";

interface Props {
  todos?: Todos;
}

const TodoList: React.FC<Props> = ({ todos = [] }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
