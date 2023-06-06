import React from 'react'
import './App.css'
import { ThemeContext } from './themeContext'

function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <button
          type="button"
          onClick={toggle}
          style={{
            color: theme.color,
            outline: 'none'
          }}
        >
          Toggle to {!dark ? 'Dark' : 'Light'} theme
        </button>
        
        <p>
          Learn React
        </p>
      </header>
    </div>
  )
}

export default App