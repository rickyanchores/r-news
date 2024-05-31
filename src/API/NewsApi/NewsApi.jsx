import axios from 'axios'
import React, {useState,useEffect} from 'react'

const NewsApi = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

    const fetchData = async (search) => {
      const myApiKey = "097e9acec10d424c94334295d2747fd8";
      const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${myApiKey}`;
        try{
            let res = await axios.get(url)
            setArticles(res.data.articles)
            setLoading(false)
            console.log(res)
        }catch(err){
            setError("Something went wrong",err)
            setLoading(false)
        }
    };

    useEffect(() => {
      //fetchData(prompt("Search for . . ."))
    }, [])
    

    if(loading) return <p>Loading. . .</p>
    if(error) return <p>Something went wrong: {error}</p>


  return (
    <div className='News'>
      <h1>News API</h1>
      <button className="bg-purple-800 text-white font-bold p-4 mb-2 mt-2 hover:animate-pulse accent-indigo-500" onClick={() => fetchData(prompt("Search for. . ."))}>SEARCH</button>
      <ul className='news-list grid grid-cols-1 md:grid-cols-3 gap-4'>
        {articles.map((article,index) => (
          <li key={index} className='article bg-zinc-800 p-2 rounded-lg'>
            <img className='image rounded-lg' src={article.urlToImage} alt="image" />
            <a className='title text-2xl font-bold text-white' href={article.url} target='_blank'>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsApi;