import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counterdisplay from './counterdisplay'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>counter display</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Counterdisplay value={count} onChange={setCount} />
    </div>
    
  )
}

export default App
