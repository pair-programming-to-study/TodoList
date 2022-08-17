import TodoForm from 'components/todo/TodoForm';
import TodoList from 'components/todo/TodoList';
import useTodoService from 'services/useTodoService';

function TodoContainer() {
  const {
    todos,
    todoText,
    onChangeTodoText,
    newTodoText,
    onChangeNewTodoText,
    isOpenForm,
    setIsOpenForm,
    selectedTodo,
    setSelectedTodo,
    onModifyMode,
    onCreateTodo,
    onUpdateTodo,
    onDeleteTodo,
  } = useTodoService();

  return (
    <>
      <TodoList
        todos={todos}
        todoText={todoText}
        isOpenForm={isOpenForm}
        setIsOpenForm={setIsOpenForm}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
        onModifyMode={onModifyMode}
        onChangeTodoText={onChangeTodoText}
        onUpdateTodo={onUpdateTodo}
        onDeleteTodo={onDeleteTodo}
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
