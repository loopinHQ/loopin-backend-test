export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const exampleTodo: (todo?: Partial<Todo>) => Todo = (todo) => ({
  id: 1,
  title: "Learn TypeScript",
  completed: false,
  ...todo,
});

export const exampleTodos: () => Todo[] = () => {
  return [
    exampleTodo(),
    exampleTodo({ id: 2, title: "Learn React", completed: false }),
    exampleTodo({ id: 3, title: "Learn Next", completed: true }),
    exampleTodo({ id: 4, title: "Learn Tailwind", completed: false }),
    exampleTodo({
      id: 5,
      title:
        "Learn something with a really long title that might break designs",
      completed: true,
    }),
  ];
};
