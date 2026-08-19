import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import React from "react";
import { useLocalStorage } from "./useLocalStorage";


// const defaultTodos = [
//   { text: "Llorar con la llorona", completed: true },
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el curso de React", completed: false },
//   { text: "LALALAALA", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');



function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState("");
 

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

 return (
  <AppUI 

  />
 );
}

export default App;
