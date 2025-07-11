function Task(props) {

    const handleChange = () => {
        const a = 9;
        props.setIsComplete(!props.isComplete, props.id);
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
                <button>Delete</button>
            </li>
        </>
    )
}

export default Task;