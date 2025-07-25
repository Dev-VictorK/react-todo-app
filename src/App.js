import { useEffect, useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Filter from './Filter';
import Sort from './Sort';


function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [task, setTask] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedSort, setSelectedSort] = useState("default");

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTask("");
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const editTask = (newTask, id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, name: newTask };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const toggleComplete = (isComplete, id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const filteredList = todos.filter((todo) => {
      if (selectedFilter === "complete") return todo.isComplete;
      if (selectedFilter === "incomplete") return !todo.isComplete;
      return true;
    }).toSorted((a, b) => {
      if (selectedSort === "C2I") return Number(b.isComplete) - Number(a.isComplete);
      if (selectedSort === "I2C") return Number(a.isComplete) - Number(b.isComplete);
      if (selectedSort === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
      if (selectedSort === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
      return 0;
    });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div className='App'>
      <h1>To Do App</h1>
      <AddTask task={task} setTask={setTask} addTodo={addTodo} />
      <h3>Actions</h3>
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      <Tasks filteredList={filteredList}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTodo={deleteTodo}
        setTask={setTask} />
    </div>
  );
}

export default App;