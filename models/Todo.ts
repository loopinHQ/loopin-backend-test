export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type Todos = Todo[];

export const exampleTodo: (todo?: Partial<Todo>) => Todo = (todo) => ({
  id: 1,
  title: "Learn TypeScript",
  completed: false,
  ...todo,
});

export const exampleTodos: () => Todos = () => {
  return [
    exampleTodo(),
    exampleTodo({ id: 2, title: "Learn React", completed: true }),
    exampleTodo({ id: 3, title: "Learn Next", completed: false }),
    exampleTodo({ id: 4, title: "Learn Tailwind", completed: true }),
    exampleTodo({
      id: 5,
      title:
        "Learn Everything with a really long title that might break designs",
      completed: false,
    }),
  ];
};
