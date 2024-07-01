import React, { useState, useEffect } from 'react'
import Post from '../component/Post'

const Home = () => {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/post')
    // .then(res =>{
    //   res.json.then(posts =>{
    //     console.log(posts)
    //   });
    // })
  })
  return (
    <>
    {posts.length > 0 && posts.map(post =>(<Post {...post}/>))}
    </>
  )
}

export default Home