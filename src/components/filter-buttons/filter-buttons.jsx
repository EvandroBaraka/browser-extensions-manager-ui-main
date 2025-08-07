const FilterButtons = (props) => {
    return (
        <div className="filters">
            <button id="all" className={`button${props.filter === 'all' ? ' selected' : ''}`} onClick={props.changeFilter} >
                All
            </button>

            <button id="active" className={`button${props.filter === 'active' ? ' selected' : ''}`} onClick={props.changeFilter}>
                Active
            </button>

            <button id="inactive" className={`button${props.filter === 'inactive' ? ' selected' : ''}`} onClick={props.changeFilter}>
                Inactive
            </button>
        </div>
    )
}

export default FilterButtons