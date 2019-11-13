import React, { useState } from 'react';

function Todo({ todo, idx}) {
  return(
    <div className="todo">
      { todo.text }
    </div>
  )
}

function App(){
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React Hooks',
      isCompleted: false
    },
    {
      text: 'Build todo App using react hooks',
      isCompleted: false
    },
    {
      text: 'Eat Dinner',
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
          {todos.map((todo, idx) => (
            <Todo 
              key={idx}
              index={idx}
              todo={todo}
            />
          ))}
      </div>
    </div>
  )



}

export default App