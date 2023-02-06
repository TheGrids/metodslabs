import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Landing } from './components/landing/Landing.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Landing/>
    </div>
  )
}

export default App
