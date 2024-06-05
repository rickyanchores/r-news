import axios from 'axios';
import React, { useState } from 'react';

const NewsApi = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const fetchData = async (query) => {
    const myApiKey = '097e9acec10d424c94334295d2747fd8';
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${myApiKey}`;

    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(url);
      setArticles(res.data.articles);
    } catch (err) {
      setError("Something went wrong: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (search.trim()) {
      fetchData(search);
    }
  };

  return (
    <div className='News'>
      <h1 className="title text-2xl">News API</h1>
      <p>by Ricky A</p>
      <input
        className='inputField p-4 mr-2 text-xl text-gray-300'
        type="text"
        placeholder='Search...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-black text-white font-bold p-4 mb-2 mt-2 hover:text-orange-600"
        onClick={handleSearch}
      >
        SEARCH
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className='news-list grid grid-cols-1 md:grid-cols-3 gap-4'>
        {articles.map((article, index) => (
          <li key={index} className='article bg-zinc-400 p-4 rounded-lg'>
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
