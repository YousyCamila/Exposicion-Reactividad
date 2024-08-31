import { useState } from 'react'

import './App.css'
import Tareas from './components/Tareas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tareas/>
    </>
  )
}

export default App
