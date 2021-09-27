import React from "react";
import { useParams, Link, Route } from "react-router-dom";
// import { baseURL, config } from "../services";
// import axios from "axios";
import "./BlogPage.css";
import CommentIcon from "@mui/icons-material/Comment";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LikeButton from "./LikeButton";
// import { useState } from 'react';
// import CommentBox from "./CommentBox";


// import Blog from './Blog';

function BlogPage(props) {
  const params = useParams();
// const [ count, setCount ] = useState(0);

  // const { comments } = props.comments.fields;

  const blog = props.blogs.find((blog) => blog.id === params.id);

  // console.log(blog)
  // console.log(params)

  if (!blog) {
    return <h2>Loading...</h2>;
  }

  // const increment = () => {
  //   setCount(count + 1);
  // }

  // const removeBlog = async () => {
  //   const blogURL = `${baseURL}/${props.blog.id}`;
  //   await axios.delete(blogURL, config);
  //   props.setToggleFetch((curr) => !curr);
  // };

  return (
    <div className="container">
      <Link to="/Form">
        <button className="btn">Write a blog</button>
      </Link>
      <div className="card-text">
        <h4><AccountCircleIcon className=""icon/>{blog.fields.username}</h4>
        <h2>{blog.fields.title}</h2>
        <p>{blog.fields.detail}</p>
        <a href={blog.fields.url}> </a>
        
        <div className="comment-stat">
          <h4>Comment!</h4>
       
          {blog.fields.comments.map((comment) => (
            <div className="comment" >
              <p><PersonIcon/> {comment.fields.comment}</p>
              {/* <button className="like-button" onClick={increment}>
                <ThumbUpIcon className='icon' /><br/>
                <h5>{count} likes</h5>
              </button> */}
              <LikeButton />
          </div>
          ))}
   
        </div> 

        <div className="comment-div" >
        <h5>Leave comment</h5>
    
        {/* <Link to={`/CommentBox/${props.blog.id}`}> */}
          <Link to={`/blog/${blog.id}/Comments`}>
            <button className="comment-button"><CommentIcon /></button>
          </Link>
        </div>
      </div>
   

      {/* <Link to={`/edit/${props.blog.id}`}><button>edit blog</button></Link> */}
      {/* <button className="remove-button" onClick={removeBlog}>
        Remove Blog
      </button> */}
    </div>
  );
}

export default BlogPage;
