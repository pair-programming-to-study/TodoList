import TodoForm from 'components/todo/TodoForm';
import TodoList from 'components/todo/TodoList';
import { useState } from 'react';
import useTodoService from 'services/useTodoService';

function TodoContainer() {
  const {
    todos,
    todoText,
    onChangeTodoText,
    newTodoText,
    onChangeNewTodoText,
    setTodoText,
    onCreateTodo,
    onUpdateTodo,
    onDeleteTodo,
  } = useTodoService();

  const [isSelectedTodoId, setIsSelectedTodoId] = useState<number | null>(null);
  const onChangeSelectedTodoId = (todoId: number | null) =>
    setIsSelectedTodoId(todoId);

  return (
    <>
      <TodoList
        todos={todos}
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onUpdateTodo={onUpdateTodo}
        onDeleteTodo={onDeleteTodo}
        isSelectedTodoId={isSelectedTodoId}
        setTodoText={setTodoText}
        onChangeSelectedTodoId={onChangeSelectedTodoId}
      />
      <TodoForm
        newTodoText={newTodoText}
        onChangeNewTodoText={onChangeNewTodoText}
        onCreateTodo={onCreateTodo}
      />
    </>
  );
}
export default TodoContainer;
