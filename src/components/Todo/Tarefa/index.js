import React from 'react'

function Tarefa(props) {
  let {tarefa, acao, excluir} = props;

  return (
    <section className="task" id={`task-${tarefa.id}`}>
      <label htmlFor={`checkbox-${tarefa.id}`}>{tarefa.name}</label> <div><input onChange={acao} type="checkbox" id={`checkbox-${tarefa.id}`} checked={tarefa.status ? true : false} /> <button data-id={tarefa.id} onClick={excluir}>Excluir</button></div>
    </section>
  )
}

export default Tarefa
