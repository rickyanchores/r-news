import axios from 'axios'
import React, {useState,useEffect} from 'react'

const NewsApi = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

    const fetchData = async () => {
      const myApiKey = "097e9acec10d424c94334295d2747fd8";
      const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${myApiKey}`;
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
      fetchData()
    }, [])
    

    if(loading) return <p>Loading. . .</p>
    if(error) return <p>Something went wrong: {error}</p>


  return (
    <div className='News'>
      <h1>News API</h1>
      <ul>
        {articles.map((article,index) => (
          <li key={index}>
            <img src={article.urlToImage} alt="image" />
            <a href={article.url} target='_blank'>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsApi;