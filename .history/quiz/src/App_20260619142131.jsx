import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Welcome/>
    </div>
  )
}

export default App
