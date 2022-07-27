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
    exampleTodo({ title: "Learn React", completed: true }),
    exampleTodo({ title: "Learn Next", completed: false }),
    exampleTodo({ title: "Learn Tailwind", completed: true }),
    exampleTodo({ title: "Learn Everything", completed: false }),
  ];
};
