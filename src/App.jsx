import { ThemeContext } from './contexts/themeContext'
import { useContext } from 'react'
import Header from './components/header/header'
import ExtensionsList from './components/extensions-list/extensions-list'
import './App.css'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <main className={theme}>
      <Header />

      <ExtensionsList />
    </main>
  )
}

export default App
