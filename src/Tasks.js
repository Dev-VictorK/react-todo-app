import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function Tasks(
    {
        filteredList = [
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
    const list = filteredList.map((todo, index) => {
        const uniqueId = uuidv4();
        
        return <Task key={index} id={index}
            task={todo.name} isComplete={todo.isComplete}
            editTask={editTask} setTask={setTask} handleDelete={handleDelete}
            toggleComplete={toggleComplete} />
    });
    return (
        <>
            <h1>Your To Do's</h1>
            <ul>
                {list}
            </ul>
        </>
    )
}

export default Tasks;