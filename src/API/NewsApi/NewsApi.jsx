import axios from 'axios';
import React, { useState, useEffect } from 'react';

const NewsApi = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (search) => {
    const myApiKey = '097e9acec10d424c94334295d2747fd8';
    const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${myApiKey}`;
    
    setLoading(true);
    setError(null);  // Reset error state before making a new request
    
    try {
      const res = await axios.get(url);
      setArticles(res.data.articles);
      setLoading(false);
      console.log(res);
    } catch (err) {
      setError("Something went wrong: " + err.message);
      setLoading(false);
    }
  };

  // Uncomment this line if you want to fetch data on initial render
  // useEffect(() => {
  //   fetchData('latest news');
  // }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='News'>
      <h1>News API</h1>
      <button
        className="bg-black text-white font-bold p-4 mb-2 mt-2 hover:text-orange-600"
        onClick={() => fetchData(prompt("Search for..."))}
      >
        SEARCH
      </button>
      <ul className='news-list grid grid-cols-1 md:grid-cols-3 gap-4'>
        {articles.map((article, index) => (
          <li key={index} className='article bg-black p-4 rounded-lg'>
            {article.urlToImage && (
              <img className='image rounded-lg mb-2' src={article.urlToImage} alt="News" />
            )}
            <a
              className='title text-2xl font-bold text-white'
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsApi;
