import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './NewsFeed.css'

const NewsFeed = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
        'X-RapidAPI-Key': '474de532ebmsh72c56b3cca9fc35p11f726jsn90a2765804da'
      }
    };
    
    axios.request(options)
    .then(res => {
    setArticles(res.data)})
    .catch(err => { alert(err.data)})
  }, [])
  // console.log(articles);

  const firstArt = articles?.slice(0,10)

  return (
    <div className='news-feed'>
      <h2>NewsFeed</h2>
      <div className='general feed'>
        {
          firstArt?.map((article, index) => (
            <div key={index}>
              <a href={article.url} target='_blank'><p>{article.title}</p></a>
            </div>)
          )
        }
      </div>
    </div>
  )
}

export default NewsFeed