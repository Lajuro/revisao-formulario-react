import React from 'react'

function Tarefa(props) {
  let {tarefa, acao, excluir} = props;

  return (
    <section className={`task${tarefa.status ? " done" : ""}`} id={`task-${tarefa._id}`}>
      <label htmlFor={`checkbox-${tarefa._id}`}>{tarefa.task}</label> <div><input onChange={acao} type="checkbox" id={`checkbox-${tarefa._id}`} checked={tarefa.status ? true : false} /> <button data-id={tarefa._id} onClick={excluir}>Excluir</button></div>
    </section>
  )
}

export default Tarefa
