import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home/Home'
import NewsApi from './API/NewsApi/NewsApi'
import Banner from './Components/Banner/Banner'


const App = () => {
  return (
    <div className='App min-h-screen flex flex-wrap justify-center items-center'>
      <div className="container bg-slate-300 rounded-md flex justify-center items-center p-5">
        <NewsApi />
      </div>
    </div>
  )
}

export default App
