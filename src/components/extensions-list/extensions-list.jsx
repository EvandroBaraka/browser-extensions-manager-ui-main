import { useState, useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext'
import extensionsData from '../../../data.json'
import FilterButtons from '../filter-buttons/filter-buttons'
import ExtensionCard from '../extension-card/extension-card'
import './extensions-list.css'

const ExtensionsList = () => {
    const [extensions, setExtensions] = useState(extensionsData)
    const [filter, setFilter] = useState('all')
    const { theme } = useContext(ThemeContext)

    let filteredExtensions;
    if(filter === 'active') {
        filteredExtensions = extensions.filter(extension => extension.isActive)
    } else if(filter === 'inactive') {
        filteredExtensions = extensions.filter(extension => !extension.isActive)
    } else {
        filteredExtensions = extensions
    }

    const changeFilter = (e) => {
        setFilter(e.target.id)
    }

    return(
        <section className="container">
            <div className="list-header">
                <h2>Extensions List</h2>
                <FilterButtons changeFilter={changeFilter} filter={filter} theme={theme}/>
            </div>

            <div className="list-container">
                <ul>
                    {filteredExtensions.map(extension => {
                        return (
                        <li key={extension.name}>
                            <ExtensionCard 
                                logo={extension.logo}
                                name={extension.name}
                                description={extension.description}
                                isActive={extension.isActive} 
                                setExtensions={setExtensions} />
                        </li>)
                    })}
                </ul>
            </div>
        </section>
    )
}

export default ExtensionsList