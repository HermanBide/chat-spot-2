import axios from 'axios';
import './Blog.css'
import { baseURL, config } from '../services';
import { Link } from 'react-router-dom'

function Blog(props) {

const { username, title, detail, url, comments } = props.blog.fields;

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
                    <button onClick={removeBlog}>Remove Blog</button>
                    <Link to={`/edit/${props.blog.id}`}><button>edit blog</button></Link>
            </div>

            <form>
            <div className="icon-comments">
                <p>{comments}</p>
            </div>
           </form>

        </body>
    )
}

export default Blog
