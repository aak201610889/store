import React from 'react'

function TodoData({ todos, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.title}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.createAt}</p>
          <p>{todo.finishedAt}</p>
          <button onClick={() => {deleteTodo()}}>delete</button>
        </div>
      ))}
    </div>
  );
}
export default TodoData