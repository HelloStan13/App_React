import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';


function TodoForm() {
  const [task, setNewtask] = React.useState('');
  const [responsible, setNewResponsible] = React.useState('');
  
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChangeTask = (event) => {
    setNewtask(event.target.value);

  };
  const onChangeResponsible = (event) => {
    setNewResponsible(event.target.value);
  };
  
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(task +" - " + "Responsable" + " - "+ responsible);
    setOpenModal(false);
  };


return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={task}
        onChange={onChangeTask}
        placeholder="Descripción de la tarea"
      />
      <br></br>

      <select class="form-select form-select-sm" 
      aria-label=".form-select-sm example"
      value={responsible}
      onChange={onChangeResponsible}

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
