import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home/Home'
import NewsApi from './API/NewsApi/NewsApi'
import Banner from './Components/Banner/Banner'
import AppBackground from "../src/assets/wave-haikei.svg"

const App = () => {
  return (
    <div className='App min-h-screen bg-gray-300 flex flex-wrap justify-center items-center p-6'>
      <div className="container  rounded-md flex justify-center items-center p-4">
        <NewsApi />
      </div>
    </div>
  )
}

export default App
