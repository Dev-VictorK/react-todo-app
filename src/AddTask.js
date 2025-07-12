function AddTask(
    { 
        task = "",
        setTask,
        addTodo 
    } ) {

    const handleClick = (e) => {
        e.preventDefault();
        const todo = {name: task, isComplete: false};
        addTodo(todo);
        
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