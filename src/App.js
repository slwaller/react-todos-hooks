import React, { useState } from 'react';
import './App.css' 

function Todo({ todo, idx}) {
  return(
    <div className="todo">
      { todo.text }
    </div>
  )
}

function TodoForm({addTodo}) {
  const [val, setVal] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!val) return;
    addTodo(val);
    setVal('');
  }

  return (
    <form onSubmit={handleSubmit}> 
      <input type="text" placeholder="Add Todo" className="input" value={val} onChange={e => setVal(e.target.value)} />
    </form>
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

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }

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
          <TodoForm 
            addTodo={addTodo}
          />
      </div>
    </div>
  )



}

export default App