import { useState }from 'react';
import './Blog.css'
import { baseURL, config } from '../services';
import { Link } from 'react-router-dom'
import axios from 'axios'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import CommentIcon from '@mui/icons-material/Comment';
import Comment from './Comment';



function Blog(props) {

    console.log(props)
const [ count, setCount ] = useState(0);
// const params = useParams();

// const blog = props.blogs.find((blog) => blog.id === params._id)
// console.log(blog)
// console.log(params)

// if(!blog) {
//     return (
//         <h2>Loading...</h2>
//     )
// }
    
const { username, title, detail, url, comments } = props.blog.fields;
// const blog = (props) => {username, title, detail, url, comments};
// console.log(blog)



const increment = () => {
 setCount(count + 1);
} 


// const decrement = () => {
//     const counter = setCount(count - 1);
//     console.log(counter)
// }

const removeBlog = async () => {
    const blogURL = `${baseURL}/${props.blog.id}`;
    await axios.delete(blogURL, config);
    props.setToggleFetch((curr) => !curr);
}
    return (
        <body className="blog-container">
        <Link to="/Form"><button>Write a blog</button></Link>
       
                <div className="blog-card">
            
                    <div className="card-text">
                        <h4>{username}</h4>
                    
                        <h2>{title}</h2>
                        <p>{detail}</p>
                        <a href={url}> </a>
                    </div>
                        <button className="remove-button" onClick={removeBlog}>Remove Blog</button>
                        {/* <Link to={`/edit/${props.blog.id}`}><button>edit blog</button></Link> */}

                    <div className="card-stats">
                        <div className="stat">

                       <ThumbUpIcon onClick={increment}/><h4>{count}</h4>
                        <h4>Comment!</h4>
                        <Link to="/CommentBox"><CommentIcon /></Link> 
                    <div className="icon-comments">
                        <Comment />
                        <p>{comments}</p>
                    </div>
                    </div>
                    </div>
                </div>
        </body>
    )
}

export default Blog
