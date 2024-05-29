import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home/Home'


const App = () => {
  return (
    <div className='App min-h-screen flex justify-center items-center'>
      <div className="container bg-black p-5">
        <Home />
      </div>
    </div>
  )
}

export default App
