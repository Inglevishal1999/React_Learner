import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputChange from './Component/InputChange'
import TaskManger from './Component/Task Manger/TaskManger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskManger/>
    </>
  )
}

export default App
