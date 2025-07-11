function Task(props) {

    const handleChange = () => {
        props.setIsComplete(!props.isComplete, props.id);
    }

    const handleDelete = () => {
        props.handleDelete(props.id);
    }
    return (
        <>
            <li>
                Task: {props.task}
                <span></span> Completed?
                <input type="checkbox"
                    checked={props.isComplete}
                    onChange={handleChange} />
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </li>
        </>
    )
}

export default Task;