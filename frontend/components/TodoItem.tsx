import { useSWRConfig } from "swr";

import { Todo } from "../models/Todo";
import { updateTodo } from "../services/Todo";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { mutate } = useSWRConfig();

  return (
    <button
      className="cursor-pointer mb-6"
      onClick={() =>
        mutate("/todos", updateTodo({ ...todo, completed: !todo.completed }))
      }
    >
      {todo.completed ? <Completed todo={todo} /> : <InProgress todo={todo} />}
    </button>
  );
};

const Completed: React.FC<Props> = ({ todo }) => (
  <div className="flex flex-col h-full w-96 grow rounded-sm bg-slate-800 shadow-sm text-center py-8 px-5 opacity-50">
    <h1 className="text-slate-300 text-xl leading-relaxed line-through">
      {todo.title}
    </h1>
  </div>
);

const InProgress: React.FC<Props> = ({ todo }) => (
  <div className="flex flex-col h-full w-96 grow rounded-sm bg-slate-800 shadow-sm text-center py-8 px-5">
    <h1 className="text-slate-300 text-xl leading-relaxed">{todo.title}</h1>
  </div>
);

export default TodoItem;
