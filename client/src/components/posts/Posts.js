import React from 'react'
import './Posts.css'
import Post from './Post'

const Posts = ({ posts }) => {
  return (
    <div className='posts'>
    {posts.map((post, i) => (
      <Post key={i} post={post}/>
    ))}
    </div>
  )
}

export default Posts