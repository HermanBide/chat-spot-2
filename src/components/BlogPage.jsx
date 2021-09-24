import React from "react";
import { useParams, Link } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";
import "./BlogPage.css";
import CommentIcon from "@mui/icons-material/Comment";
// import CommentBox from "./CommentBox";

// import Blog from './Blog';

function BlogPage(props) {
  const params = useParams();

  // const { comments } = props.comments.fields;

  const blog = props.blogs.find((blog) => blog.id === params.id);

  // console.log(blog)
  // console.log(params)

  if (!blog) {
    return <h2>Loading...</h2>;
  }

  const removeBlog = async () => {
    const blogURL = `${baseURL}/${props.blog.id}`;
    await axios.delete(blogURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <div className="container">
      <Link to="/Form">
        <button className="btn">Write a blog</button>
      </Link>
      <div className="card-text">
        <h4>{blog.fields.username}</h4>
        <h2>{blog.fields.title}</h2>
        <p>{blog.fields.detail}</p>
        <a href={blog.fields.url}> </a>
        
        <div className="comment-stat">
          <h4>Comment!</h4>
      
          {blog.fields.comments.map((comment) => (

              <p>{comment.fields.comment}</p>
          ))}
        </div> 

        <div>
        <h5>Leave comment</h5>
        {/* <Link to={`/CommentBox/${props.blog.id}`}>
            <CommentIcon />
        </Link> */}
        </div>
          
      </div>
   

      {/* <Link to={`/edit/${props.blog.id}`}><button>edit blog</button></Link> */}
      <button className="remove-button" onClick={removeBlog}>
        Remove Blog
      </button>
    </div>
  );
}

export default BlogPage;
