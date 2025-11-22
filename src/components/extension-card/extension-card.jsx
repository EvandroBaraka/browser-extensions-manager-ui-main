import './extension-card.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import ToggleButton from '../toggle-button/toggle-button'

const ExtensionCard = ({ logo, name, description, isActive, setExtensions, removeExtension }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`extension-card ${theme}`}>
            <div className="card-data">
                <img className='logo' src={logo} alt='Logo' />
                <div className='extension-data'>
                    <h1>{name}</h1>
                    <p className={`${theme}`}>{description}</p>
                </div>
            </div>

            <div className='card-controls'>
                <button className={`button-remove ${theme}`} onClick={() => removeExtension(name)}>Remove</button>
                <ToggleButton id={name} isActive={isActive} setExtensions={setExtensions} />
            </div>
        </div>
    )
}

export default ExtensionCard