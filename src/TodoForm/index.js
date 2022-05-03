import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [newResponsable, setNewResponsable] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);

  };
  const onChange1 = (event) => {
    setNewResponsable(event.target.value);
  };
  
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue +" - "+ "Responsable" +" - "+ newResponsable);
    setOpenModal(false);
  };


  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Descripción de la tarea"
      />
      <br></br>


      <select class="form-select form-select-sm" 
      aria-label=".form-select-sm example"
      onChange={onChange1}
      value={newResponsable}
      >
      <option selected></option>
        <option>Adryan Ynfante</option>
        <option>Julian lasso </option>
        <option>Lorena Castro</option> 
      </select>

      <br></br>

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          onClick={onSubmit}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
