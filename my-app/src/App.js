//imports for the react project

//useState for state changes, useEffect for list loading, useRef to maintain information over refreshes
import React, { useState, useRef, useEffect } from 'react';

//local import
import TodoList from './TodoList'

//import for random key creation
import {v4 as uuidv4} from 'uuid'

//key creation
const LOCAL_STORAGE_KEYS='todos'

function App() {

  //list that is used and loaded
  const [todos, setTodos] = useState([])

  //single name to be loaded to list
  const todoNameRef = useRef()
  
  //Effect which maintains items over refresh
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  //effect which stringifies the json to be printed
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS,JSON.stringify(todos))
  }, [todos])

  //function which gives functionality to the checkmarks
  function toggleTodo(id) {
    const newTodos= [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = ! todo.complete
    setTodos(newTodos)
  }

  //function which adds functionality to the add todo button
  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos => {
      return[...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  //function which adds functionality to the clear todo button
  function handleClearTodos() {
    const newTodos=todos.filter(todo=> !todo.complete)
    setTodos(newTodos)
  }

  return (
    //component items
    <>

    //list component which is where list is displayed
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    
    //input component
    <input ref={todoNameRef} type="text"/>

    //add todo component button with on click andle which calls function handleAddTodo
    <button onClick={handleAddTodo}>Add Todo</button>

    //clear todo component with on click that calds handleClearTodos
    <button onClick={handleClearTodos}>Clear Completed Todos</button>

    //print component for todos left unchecked
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
//0850-5668-9691