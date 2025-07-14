import { useState } from "react";
import EditTask from "./EditTask";

function Task(props) {

    const [isEdit, setIsEdit] = useState(false);

    const handleChange = () => {
        props.toggleComplete(!props.isComplete, props.id);
    }

    const handleDeleteClick = () => {
        props.deleteTodo(props.id);
    }
    
   return isEdit ? (
        <>
            <EditTask task={props.task} id={props.id} 
            editTask={props.editTask} setTask={props.setTask}
            setIsEdit={setIsEdit}/>
        </>
    ):(
        <>
            <li>
                Task: {props.task}
                <span></span> Completed?
                <input type="checkbox"
                    checked={props.isComplete}
                    onChange={handleChange} />
                <button onClick={setIsEdit}> Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
            </li>
        </>
    );
    
    
}

export default Task;