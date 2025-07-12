import { useEffect, useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import AddTask from './AddTask';

{/** To-Do List App
Add, edit, delete, and mark tasks as complete.
Store tasks in localStorage.*/}
function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [stored, setStored] = useState([]);

  const storeTasks = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (todo) => {
    const newTodos = [...stored, todo];
    setTodos(newTodos);
    setTask("");
  }

  const setIsComplete = (isComplete, index) => {
    const newTodos = [...stored.slice(0, index),
    { ...stored[index], isComplete },
    ...stored.slice(index + 1)];
    setTodos(newTodos);
  }

  const handleDelete = (index) => {
    const newTodos = [...stored.slice(0, index), ...stored.slice(index + 1)];
    storeTasks(newTodos);
    setTodos(newTodos);
  }

  const editTask = (newTask, index) => {
    const newTodos = [...stored.slice(0, index),
    { ...stored[index], name: newTask },
    ...stored.slice(index + 1)];
    setTodos(newTodos);
  }

  useEffect(() => {
    if (todos.length > 0) {
      storeTasks(todos);
    }
    const retrieved = JSON.parse(localStorage.getItem('todos'));
    if (retrieved.length > 0) {
      setStored(retrieved);
    } else {
      setStored([]);
    }
  }, [todos]);

  return (
    <div className='App'>
      <h1>To Do App</h1>
      <AddTask task={task} setTask={setTask} addTodo={addTodo} />
      <Tasks stored={stored}
        setIsComplete={setIsComplete}
        editTask={editTask}
        handleDelete={handleDelete}
        setTask={setTask} />
    </div>
  );
}

export default App;