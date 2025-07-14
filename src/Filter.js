function Filter(props) {
    const handleChange = (e) => {
        props.setSelectedFilter(e.target.value);
    }
    return (
        <>
            Filter:<span></span>
            <select value={props.selectedFilter} onChange={handleChange}>
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </>

    )
}

export default Filter;