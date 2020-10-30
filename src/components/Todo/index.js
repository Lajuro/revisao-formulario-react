import React, {useState} from 'react';
import Tarefa from './Tarefa';

import './style.css';

function Todo() {

  let [tarefas, setTarefas] = useState([]);

  function atualizarEstadoTarefa(e) {
    let id = parseInt(e.target.id.split('-')[1]);
    let task = document.getElementById(`task-${id}`);
    console.log(task);

    let tarefasModificadas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        if (tarefa.status) {
          tarefa.status = false
          task.classList.remove('done');
        } else {
          tarefa.status = true
          task.classList.add('done');
        }
      }

      return tarefa
    }) 
  
    setTarefas(tarefasModificadas);

  }

  function adicionarTarefa(e) {
    let campo = document.getElementById('task');
    
    // 1 - Criar um ID
    let id = tarefas.length === 0 ? 1 : tarefas[tarefas.length - 1].id + 1;
    
    // 2 - Criar name
    let name = campo.value;

    // 3 - Criar status
    let status = false;

    let tarefasModificadas = [...tarefas, {id, name, status}];

    setTarefas(tarefasModificadas);
    campo.value = "";
  }

  function excluir(e) {
    let id = parseInt(e.target.dataset.id);

    let tarefasModificadas = tarefas.filter(tarefa => tarefa.id !== id)

    setTarefas(tarefasModificadas);

  }

  return (
    <div className="todolist">
      <header>
        <h1>Todo List</h1>
        <p>Get things done, one item at a time.</p>
      </header>
      <main className="tasks">
        {tarefas.map(tarefa => (
          <Tarefa tarefa={tarefa} acao={atualizarEstadoTarefa} excluir={excluir} />
        ))}
      </main>
      <footer>
        <label htmlFor="task">Add to the todo list</label>
        <input type="text" id="task" />
        <button onClick={adicionarTarefa}>ADD ITEM</button>
      </footer>
    </div>
  )
}

export default Todo;
