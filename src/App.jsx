import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='h1'>hello react</h1>
      <div className='div1'></div>
    </div>
  )
}

export default App
