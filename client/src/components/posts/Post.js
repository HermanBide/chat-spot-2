import React from "react";
import "./Post.css";
import { Link } from "react-router-dom"

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={post.photo} alt="6MzZt2.md.jpg" />
      )}

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            {post.categories.map((cat, i) => (
              
              <span className="postCat" key={i}>{cat.name}</span>
            ))}
          </span>
        </div>
        <Link to={`/posts/${post._id}`} className="link" style={{ textDecoration: "none", color: "inherit" }}>
        <span className="postTitle" > {post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
};

export default Post;
