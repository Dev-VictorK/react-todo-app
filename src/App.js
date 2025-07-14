import { useEffect, useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Filter from './Filter';

{/** To-Do List App
Add, edit, delete, and mark tasks as complete.
Store tasks in localStorage.
------------------------------------------------------
Add a unique ID to each task (uuid or timestamp).

Add a filter (All / Completed / Incomplete).

Sort by date or completion status.

Add dark mode toggle using useContext.
*/}
function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [task, setTask] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredList, setFilteredList] = useState(todos);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTask("");
  }

  const handleDelete = (id) => {
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
  
  const toggleComplete = (newIsComplete, id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: newIsComplete };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function filterList(choice) {
    let list;
    switch (choice) {
      case "complete":
        list = todos.filter((todo) => todo.isComplete === true);
        break;
      case "incomplete":
        list = todos.filter((todo) => todo.isComplete === false);
        break;
      case "all":
        list = todos;
        break;
      default:
        break;
    }
    setFilteredList(list);
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    filterList(selectedFilter);
  }, [todos, selectedFilter])

  return (
    <div className='App'>
      <h1>To Do App</h1>
      <AddTask task={task} setTask={setTask} addTodo={addTodo} />
      <Filter setSelectedFilter={setSelectedFilter} />
      <Tasks filteredList={filteredList}
        toggleComplete={toggleComplete}
        editTask={editTask}
        handleDelete={handleDelete}
        setTask={setTask} />
    </div>
  );
}

export default App;