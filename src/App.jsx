import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home/Home'
import NewsApi from './API/NewsApi/NewsApi'


const App = () => {
  return (
    <div className='App min-h-screen flex justify-center items-center'>
      <div className="container p-5">
        <NewsApi />
      </div>
    </div>
  )
}

export default App
