import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tarefa from './Tarefa';

import './style.css';

const URL = "http://localhost:4000/tasks";

function Todo() {

  let [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    refreshTarefas();
  }, []);

  async function refreshTarefas() {
    let {data} = await axios.get(URL);
    setTarefas(data);
  }

  // Create
  async function adicionarTarefa(e) {
    e.preventDefault();
    let campo = document.getElementById('task');
    let name = campo.value;

    await axios.post(URL, {task: name});

    campo.value = "";
    refreshTarefas();
  }

  // Update
  async function atualizarEstadoTarefa(e) {
    let id = e.target.id.split('-')[1];
    let tarefa = tarefas.find(tarefa => tarefa._id === id);

    await axios.put(`${URL}/${id}`, {
      task: tarefa.task,
      status: !tarefa.status
    });
  
    refreshTarefas();
  }

  async function excluir(e) {
    let id = e.target.dataset.id;
    await axios.delete(`${URL}/${id}`);
    
    refreshTarefas();
  }

  return (
    <div className="todolist">
      <header>
        <h1>Todo List</h1>
        <p>Get things done, one item at a time.</p>
      </header>
      <main className="tasks">
        {tarefas.length === 0 ? <p className="secondary">Your todo list is empty.</p> : tarefas.map((tarefa, key) => (
          <Tarefa tarefa={tarefa} key={key} acao={atualizarEstadoTarefa} excluir={excluir} />
        ))}
      </main>
      <footer>
        <form onSubmit={adicionarTarefa}>
          <section className="form-add">
            <label htmlFor="task">Add to the todo list</label>
            <section className="form-group">
              <input type="text" id="task" autoComplete="off" />
              <button type="submit">ADD ITEM</button>
            </section>
          </section>
        </form>
      </footer>
    </div>
  )
}

export default Todo;
