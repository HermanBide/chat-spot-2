import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import axios from "axios"
import { Link } from "react-router-dom"

const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2] 
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/posts/" + path)
      setPost(res.data)
    };
    getPost()
  }, [path]);


  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        { post.pgoto && 
          <img
            className="singlePostImg"
            src={post.photo}
            alt="6MzZt2.md.jpg"
            border="0"
          />
        }
        <h1 className="singlePostTitle">
        {post.title}
          <div className="singlePostEdit">
            <FaEdit className="singlePostIcon" />
            <RiDeleteBin6Fill className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link" style={{ textDeoration: "none", color:"inherit"}}>
             <b>{post.username}</b>
            </Link>
          </span>
          <br/>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
