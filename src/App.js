import { useEffect, useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import AddTask from './AddTask';

{/** To-Do List App
Add, edit, delete, and mark tasks as complete.
Store tasks in localStorage.*/}
function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [task, setTask] = useState("");
  

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTask("");
  }

  const toggleComplete = (isComplete, index) => {
    const newTodos = [...todos.slice(0, index),
    { ...todos[index], isComplete },
    ...todos.slice(index + 1)];
    setTodos(newTodos);
  }

  const handleDelete = (index) => {
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setTodos(newTodos);
  }

  const editTask = (newTask, index) => {
    const newTodos = [...todos.slice(0, index),
    { ...todos[index], name: newTask },
    ...todos.slice(index + 1)];
    setTodos(newTodos);
  }

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div className='App'>
      <h1>To Do App</h1>
      <AddTask task={task} setTask={setTask} addTodo={addTodo} />
      <Tasks todos={todos}
        toggleComplete={toggleComplete}
        editTask={editTask}
        handleDelete={handleDelete}
        setTask={setTask} />
    </div>
  );
}

export default App;