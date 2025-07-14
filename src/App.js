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


  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTask("");
  }

  const toggleComplete = (rev, index) => {
    const newTodos = [...todos.slice(0, index),
    { ...todos[index], isComplete: rev },
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

  const filteredList = filterList(selectedFilter);

  function filterList(choice) {
    let list;
        switch(choice) {
            case "complete":
                list = todos.filter((todo) => todo.isComplete === true);
                break;
            case "incomplete":
                list = todos.filter((todo)=> todo.isComplete === false);
                break;
            case "all":
                list = todos;
                break;
            default:
                break;
        }
        return list;
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

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