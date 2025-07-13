import { useEffect, useState } from "react";
import Task from "./Task";

function Tasks(
    {
        todos = [
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
    return (
        <>
            <h1>Your To Do's</h1>
            <select>
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
            </select>
            <ul>
            </ul>
        </>
    )
}

export default Tasks;