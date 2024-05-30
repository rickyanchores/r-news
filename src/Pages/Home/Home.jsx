import React from 'react'
import NewsApi from '../../API/NewsApi/NewsApi';

const Home = () => {
  return (
    <div className='Home'>
        <h1>R NEWS</h1>
        <p>Test News API</p>
        <div className="container">
          <NewsApi />
        </div>
    </div>
  )
}

export default Home;