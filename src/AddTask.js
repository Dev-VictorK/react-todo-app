import { v4 as uuidv4 } from "uuid";

function AddTask(
    { 
        task = "",
        setTask,
        addTodo 
    } ) {

    const handleClick = (e) => {
        e.preventDefault();
        if(task.length > 0){
        const todo = {name: task, isComplete: false, id: uuidv4(), createdAt: new Date().toISOString() };
        addTodo(todo);
        }
    }

    return (
        <>
            <form>
                <input type='text' value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <button onClick={handleClick}>Add</button>
            </form>
        </>
    )
}

export default AddTask;