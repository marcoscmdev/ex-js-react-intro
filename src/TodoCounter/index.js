import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos, 
    totalTodos, 
  }= React.useContext(TodoContext)

  return (
    <h1 className="TodoCounter">{
      totalTodos>0 &&  totalTodos === completedTodos ? ("Felicitaciones, completaste todos los TODOs 🎯"):
      <>
      (Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS)
      </>
    }
    </h1> 
  );
} 
export { TodoCounter };
