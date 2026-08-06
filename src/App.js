import logo from "./platzi.webp";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "Llorar con la llorona", completed: true },
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de React", completed: false },
  { text: "LALALAALA", completed: false },
  { text: "LALALAALA", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={15} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
