import './extension-card.css'
import ToggleButton from '../toggle-button/toggle-button'

const ExtensionCard = ({ logo, name, description, isActive, setExtensions }) => {
    return (
        <div className='extension-card'>
            <div className="card-data">
                <img className='logo' src={logo} alt='Logo' />
                <div className='extension-data'>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>

            <div className='card-controls'>
                <button className='button-remove' >Remove</button>
                <ToggleButton id={name} isActive={isActive} setExtensions={setExtensions} />
            </div>
        </div>
    )
}

export default ExtensionCard