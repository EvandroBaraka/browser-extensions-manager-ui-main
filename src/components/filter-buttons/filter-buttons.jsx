const FilterButtons = (props) => {
    return (
        <div className="filters">
            <button id="all" className={`filter-button${props.filter === 'all' ? ' selected' : ''} ${props.theme}`} onClick={props.changeFilter} >
                All
            </button>

            <button id="active" className={`filter-button${props.filter === 'active' ? ' selected' : ''} ${props.theme}`} onClick={props.changeFilter}>
                Active
            </button>

            <button id="inactive" className={`filter-button${props.filter === 'inactive' ? ' selected' : ''} ${props.theme}`} onClick={props.changeFilter}>
                Inactive
            </button>
        </div>
    )
}

export default FilterButtons