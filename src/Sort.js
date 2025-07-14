function Sort(props){
    const handleChange = (e) => {
        props.setSelectedSort(e.target.value);
    }
    return(
        <>
        <select value={props.selectedSort} onChange={handleChange}>
            <option value="C2I">Complete to incomplete</option>
            <option value="I2C">Incomplete to complete</option>
            <option value="default">No sort</option>
        </select>
        </>
    )
}

export default Sort;