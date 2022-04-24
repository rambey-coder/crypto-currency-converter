import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    .then(res => { console.log(res.data)
    setArticles(res.data)})
    .catch(err => { console.error(err)})
  }, [])
  console.log(articles);

  const firstArt = articles?.slice(0,10)

  return (
    <div className='news-feed'>
      <h2>NewsFeed</h2>
      <>
        {
          firstArt?.map((article, index) => (
            <div key={index}>
              <a href={article.url}><p>{article.title}</p></a>
            </div>)
          )
        }
      </>
    </div>
  )
}

export default NewsFeed