import { Todo } from "../models/Todo";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
};

export default TodoItem;
