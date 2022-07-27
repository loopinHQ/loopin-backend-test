import { exampleTodos, Todos } from "../models/Todo";
/**
 * This is a fake service that returns a list of todos.
 * As part of this test we'd like you to remove the exampleTodos function
 * and replace it with a real service.
 *
 * @returns {Todos}
 */
export const getTodos = async (): Promise<Todos> => {
  // We want to return something like this:
  // return fetch("/todos").then((r) => r.json());

  return exampleTodos();
};
