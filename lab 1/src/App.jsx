import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Landing } from './components/landing/Landing.jsx'
import { Form } from './components/form/Form.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Landing/>
      <Form/>
    </div>
  )
}

export default App
