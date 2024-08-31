import { useState } from 'react'

import './App.css'

import Contador from './components/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contador/>
    </>
  )
}

export default App
