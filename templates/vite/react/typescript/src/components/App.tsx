import { useState } from 'react'
import { tw } from 'twind'

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={tw`bg-gray-500`} >
        test
      </div>
    </div>
  )
}

export default App
