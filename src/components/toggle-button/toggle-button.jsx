import './toggle-button.css'

const ToggleButton = ({ id, isActive, setExtensions }) => {
    const handleToggle = () => {
        setExtensions(prevExtensions =>
            prevExtensions.map(extension =>
                extension.name === id
                    ? { ...extension, isActive: !isActive }
                    : extension
            )
        )
    }

    return (
        <>
            <input type="checkbox" className='check' id={id} checked={isActive} onChange={handleToggle} />
            <label htmlFor={id} className="switch">
                <span className="slider"></span>
            </label>
        </>
    )
}

export default ToggleButton