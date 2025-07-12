import Task from "./Task";

function Tasks(
    {
        stored = [
            {
                name: "No task yet",
                isComplete: false
            }
        ],
        setIsComplete,
        handleDelete,
        editTask,
        setTask
    }
) {
    const todoList = stored.map((todo, index) => {
        return <Task key={index} id={index} task={todo.name} 
        isComplete={todo.isComplete} 
        setIsComplete={setIsComplete} 
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