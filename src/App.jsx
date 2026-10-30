import { useEffect, useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("dhaarsan")
  })

  return (
    <>
    <h3> count: {count} </h3>
    <button onClick={() => setCount((value) => value -1)}>-</button>      
    <button onClick={() => setCount((value) => value +1)}>+</button>      
    </>
  )
}

export default App
