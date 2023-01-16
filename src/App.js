import React, { useState, useEffect } from "react"; 
import './App.css';
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import Filter from "./Components/Filter";


function App() {

  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  

  //run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  //also useeffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  useEffect(() => {
    filterHandler();
  }, [filterInput]);

  //function
  const filterHandler = () => {
     switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true)
        .filter((v) => !v.text.indexOf(filterInput)));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false)
        .filter((v) => !v.text.indexOf(filterInput)));
        break;
      default:
        console.log(todos.filter((v) => v.text.indexOf(filterInput)))
        setFilteredTodos(todos.filter((v) => !v.text.indexOf(filterInput)));
        break;
    }
  };
   
  //save to local
  const saveLocalTodos = () => {
   localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Filter
      filterInput={filterInput}
      setFilterInput={setFilterInput}
      />
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <ToDoList 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
