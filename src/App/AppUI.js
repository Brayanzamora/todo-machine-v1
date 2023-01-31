import React from 'react';
import { TodoContext } from '../todoContext'
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/index.js'
import { TodoForm } from '../components/TodoForm';
import { TodosLoading } from '../components/TodosLoading/index';
import { TodosError } from '../components/TodosError/index';
import { EmptyTodos } from '../components/EmptyTodos/index';

function AppUI(props) {
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);
    return(
    <React.Fragment>
        <TodoCounter />
        <TodoSearch />
          <TodoList>
            {error && <TodosError/>}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos/>}

            { searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text = {todo.text }
                completed = {todo.completed }
                onComplete= {() => completeTodo(todo.text)}
                onDelete ={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}

        <CreateTodoButton setOpenModal={setOpenModal}/>
      </React.Fragment>
      );
}

export {AppUI};