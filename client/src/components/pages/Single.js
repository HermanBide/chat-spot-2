import React from 'react'
import './Single.css'
import Sidebar from '../sidebar/Sidebar'
import SinglePost from './SinglePost'


const Single = () => {
  return (
    <div className='single'>
        <Sidebar/>
        <SinglePost />
    </div>
  )
}

export default Single