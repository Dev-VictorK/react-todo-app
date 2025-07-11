function EditTask(props) {
    const handleClick = () => {
        
    }
    return (
        <>
            <form>
                <input type='text' value={props.task}
                    onChange={(e) => setTask(e.target.value)} />
                <button onClick={handleClick}>Update</button>
            </form>
        </>
    )
}

export default EditTask;