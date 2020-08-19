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

  const [todos, setTodos] = useState([])

  const todoNameRef = useRef()
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS,JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos= [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = ! todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos => {
      return[...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  
  function handleClearTodos() {
    const newTodos=todos.filter(todo=> !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>  
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear Completed Todos</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
