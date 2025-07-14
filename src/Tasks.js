import Task from "./Task";

function Tasks(
    {
        filteredList = [
            {
                name: "No task yet",
                isComplete: false,
                id: null
            }
        ],
        toggleComplete,
        deleteTodo,
        editTask,
        setTask
    }
) {
    const list = filteredList.map((todo) => {
        return <Task key={todo.id} id={todo.id}
            task={todo.name} isComplete={todo.isComplete}
            editTask={editTask} setTask={setTask} deleteTodo={deleteTodo}
            toggleComplete={toggleComplete} />
    });
    return (
        <>
            <h3>Your To Do's</h3>
            <ul>
                {list}
            </ul>
        </>
    )
}

export default Tasks;