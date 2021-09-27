import { useState } from "react";
import "./Blog.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";


function Blog(props) {
  console.log(props);
  const [count, setCount] = useState(0);
  const { username, title, detail, url, comments } = props.blog.fields;

  const increment = () => {
    setCount(count + 1);
  };

//   const removeBlog = async () => {
//     const blogURL = `${baseURL}/${props.blog.id}`;
//     await axios.delete(blogURL, config);
//     props.setToggleFetch((curr) => !curr);
//   };
  return (
    <body>
      <div className="blog-card">
        <div className="card-text">
          <h4>{username}</h4>
          <h2>{title}</h2>
          <p className="p">{detail}</p>
          {/* <button className="read-more">Read More</button> */}
        </div>

        <div className="card-stats">
            <div className="stat">

              <button className="like-button" onClick={increment} >
                <ThumbUpIcon className="icon"/>
                <h5>{count} likes</h5>
              </button>
            </div>

            <div className="stat">
            </div>

            <div className="stat">
                <h3>Views</h3>
            </div>
        </div>
      </div>

      {/* <Link to={`/edit/${props.blog.id}`}><button>edit blog</button></Link> */}
      {/* <button className="remove-button" onClick={removeBlog}>
        Remove Blog
      </button> */}
    </body>
  );
}

export default Blog;
