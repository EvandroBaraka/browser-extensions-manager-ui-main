import { useState } from "react"
import './theme-toogler-button.css'
import '../../index.css'

function changeTheme(theme) {
    const newTheme = (theme === 'light' ? 'dark' : 'light');
    return newTheme
}

const ThemeTooglerButton = () => {
    const [theme, setTheme] = useState('dark')

    return (
        <button className={theme} onClick={() => { setTheme(changeTheme(theme)) }} />
    )
}

export default ThemeTooglerButton