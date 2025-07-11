import { useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import AddTask from './AddTask';

{/** To-Do List App
Add, edit, delete, and mark tasks as complete.
Store tasks in localStorage.*/}
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = (todo) => {
    const newTodo = [...todos, todo];
    setTodos(newTodo);
    setTask("");
  }

  const setIsComplete = (isComplete, index) => {
    const newTodos = [...todos.slice(0,index), 
      {...todos[index], isComplete}, 
      ...todos.slice(index+1)];
      setTodos(newTodos);
  }

  return (
    <div className='App'>
      <h1>To Do App</h1>
      <AddTask task={task} setTask={setTask} addTodo={addTodo}/>
      <Tasks todos={todos} setIsComplete={setIsComplete}/>
    </div>
  );
}

export default App;
