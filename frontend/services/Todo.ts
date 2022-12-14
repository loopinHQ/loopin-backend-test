import { exampleTodos, Todo } from "../models/Todo";

/**
 * This is a fake service that returns a list of todos.
 * As part of this test we'd like you to remove the exampleTodos function
 * and replace it with a real service.
 *
 * @returns {Todos}
 */
export const getTodos = async (): Promise<Todo[]> => {
  // TODO: Implement your own service to get Todos
  // It might look something like this:
  // return fetch("/todos").then((r) => r.json());

  return exampleTodos();
};

export const updateTodo = async (todo: Todo): Promise<void> => {
  // TODO: Implement a real update service
  return;
};

export const addTodo = async (todo: Partial<Todo>): Promise<void> => {
  // TODO Implement a real add service
  return;
};
