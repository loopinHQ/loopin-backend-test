import React from "react";
import { useSWRConfig } from "swr";
import { addTodo } from "../services/Todo";

const AddTodo: React.FC = () => {
  const { mutate } = useSWRConfig();
  const [title, setTitle] = React.useState<string>("");

  return (
    <div className="w-full my-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const todo = { title, completed: false };
          mutate("/todos", addTodo(todo));
        }}
        className="px-8 pt-6 pb-8"
      >
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow bg-slate-300 text-l appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline placeholder-slate-800"
            id="username"
            type="text"
            placeholder="Add a new todo"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
