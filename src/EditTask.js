import { useState } from "react";

function EditTask(props) {

    const [edit, setEdit] = useState(props.task);

    const handleClick = (e) => {
        e.preventDefault();
        props.editTask(edit, props.id);
        props.setIsEdit();
    }
    return (
        <>
            <form>
                <input type='text' value={edit}
                    onChange={(e) => setEdit(e.target.value)} />
                <button onClick={handleClick}>Update</button>
            </form>
        </>
    )
}

export default EditTask;