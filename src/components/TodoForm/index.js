import React from 'react';
import { TodoContext } from '../../todoContext';
import './TodoForm.css';

function TodoForm() {

    const { addTodo,setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onCancel = () => {
        //Todo
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChangeTodoValue = (event) => {
        setNewTodoValue(event.target.value);
    };
    return(
        <form onSubmit={onSubmit} >
        <label>Escribe tu nuevo To Do</label>
        <textarea
          value = {newTodoValue}
          onChange = {onChangeTodoValue}
          placeholder = "Escribe una nueva tarea"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button-cancel"
            onClick = {onCancel}
          >
            Cancelar
          </button>
  
          <button
            className="TodoForm-button TodoForm-button-add"
            type= "submit"
          >
            Añadir
            </button>
        </div>
      </form>
    );
}

export {TodoForm};