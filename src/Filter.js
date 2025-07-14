function Filter(props) {
    const handleChange = (e) => {
        let list;
        switch(e.target.value) {
            case "complete":
                list = props.todos.filter((todo) => todo.isComplete === true);
                break;
            case "incomplete":
                list = props.todos.filter((todo)=> todo.isComplete === false);
                break;
            case "all":
                list = props.todos;
                break;
            default:
                break;
        }
        props.setFiltered(e.target.value);
        props.setFilteredList(list);
    }
    return(
        <select value={props.filtered} onChange={handleChange}>
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
        </select>
    )
}

export default Filter;