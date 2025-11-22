import './toggle-button.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'

const ToggleButton = ({ id, isActive, setExtensions }) => {
    const { theme } = useContext(ThemeContext)

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
            <label htmlFor={id} className={`switch ${theme}`} tabIndex={0}>
                <span className="slider"></span>
            </label>
        </>
    )
}

export default ToggleButton