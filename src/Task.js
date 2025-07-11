import EditTask from "./EditTask";

function Task(props) {

    const handleChange = () => {
        props.setIsComplete(!props.isComplete, props.id);
    }

    const handleDelete = () => {
        props.handleDelete(props.id);
    }

    const isEdit = false; 

   return isEdit ? (
        <>
            <EditTask task={props.task} id={props.id} editTask={props.editTask}/>
        </>
    ):(
        <>
            <li>
                Task: {props.task}
                <span></span> Completed?
                <input type="checkbox"
                    checked={props.isComplete}
                    onChange={handleChange} />
                <button onClick={() => isEdit = !isEdit}> Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </li>
        </>
    );
    
    
}

export default Task;