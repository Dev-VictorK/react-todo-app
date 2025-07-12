import Task from "./Task";

function Tasks(
    {
        todos = [
            {
                name: "No task yet",
                isComplete: false
            }
        ],
        toggleComplete,
        handleDelete,
        editTask,
        setTask
    }
) {
    const todoList = todos.map((todo, index) => {
        return <Task key={index} id={index} task={todo.name} 
        isComplete={todo.isComplete} 
        toggleComplete={toggleComplete} 
        handleDelete={handleDelete}
        editTask={editTask}
        setTask={setTask}/>
    })
    return (
        <>
            <h1>Your To Do's</h1>
            <ul>
                {todoList}
            </ul>
        </>
    )
}

export default Tasks;