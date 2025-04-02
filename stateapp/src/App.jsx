import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputChange from './Component/InputChange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputChange/>
    </>
  )
}

export default App
