import { Todo } from "../models/Todo";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className="flex flex-col h-full w-96 grow rounded-sm bg-slate-800 shadow-sm mb-6 text-center py-8 px-5">
      <h1 className="text-slate-300 text-xl text-semibold">{todo.title}</h1>
    </div>
  );
};

export default TodoItem;
