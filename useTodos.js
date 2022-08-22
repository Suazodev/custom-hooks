import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodos = () => {
  const init = () => JSON.parse(localStorage.getItem('todos')) || initialState;

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    dispatch({
      type: '[TODO] ADD_TODO',
      payload: todo,
    });
  };

  const onDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] REMOVE_TODO',
      payload: id,
    });
  };

  const onToggleTodo = (id) => {
    dispatch({
      type: '[TODO] TOGGLE_TODO',
      payload: id,
    });
  };

  const todosCount = todos.length;
  const todosPending = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    todosCount,
    todosPending,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
  };
};
