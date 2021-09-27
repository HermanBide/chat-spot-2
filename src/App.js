import axios from 'axios';
import { useState, useEffect } from 'react'
import {config, baseURL } from "./services";
import './App.css';
import Navbar from './components/Navbar';
import {  Link, Route } from 'react-router-dom'
import Form from './components/Form';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import Advices from './components/Advices';
import CommentBox from './components/CommentBox'
import LikeButton from './components/LikeButton'





function App() {

    const [ toggleFetch, setToggleFetch ] = useState(false);
    const [ blogs, setBlogs ] = useState([])
    // const [articles, setArticles ] = useState([]);
    // const [term, setterm ] = useState("everything");
    //  const [isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
          
        const getBlog = async () => {
          // const nytURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLE_KEY_API}`;

            const blogResponse = await axios.get(baseURL+"/blog", config)
            const commentResponse = await axios.get(`${baseURL}/comments`, config);
            // const res = await axios.get( baseURL, config)
            const comments = commentResponse.data.records;
            console.log(comments, "loggin the comments")

            const blogsWithComments = blogResponse.data.records.map((blog) => {
              return {
                ...blog,
                fields: {
                  ...blog.fields,
                  comments: blog.fields.comments ? comments.filter((comment) => blog.fields.comments.includes(comment.id))
                  : []
                }
              }
            })
            console.log(blogsWithComments, "blog with comment")
            setBlogs(blogsWithComments)
        } 
        getBlog();
    },[toggleFetch]);



    return (
      <div className="App">
      <Navbar />

        <Route exact path="/">
        {/* <header className="header">

          <div className="article-container">
          <h1>Read, Write, Blog.</h1>
          <p>Articles & blogs to read. Share your experience and passiosn with the world.Like or comment on something you read.</p>

            <div className="article-card">
              <div className="card-image">
              </div>
              <div className="card-text">
                <h3>username</h3>
                <h1>title</h1>
                <p>Detail</p>
              </div>
              <div className="card-stats">
                <h4>like button</h4>
                <button className="article-button">button</button>
                <span></span>
              </div>
            </div>
          </div>
        </header> */}

        <section className="blog-section">
          <div className="blog-containers">
          { blogs.map((blog) => (
            <Link to={`/Blog/${blog.id}`}><Blog key={blog.id} blog={blog} setToggleFetch={setToggleFetch} /></Link>
          ))} 
          </div>
        </section>

        {/* <footer className="footer">
          <div>
            footer
          </div>
        </footer> */}
        </Route>

        <Route path="/Blog/:id">
          <BlogPage blogs={blogs} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/blogPage/:id">
          <BlogPage  setToggleFetch={setToggleFetch}/>
        </Route>  
        
        <Route path="/Advices">
          <Advices />
        </Route>

        <Route path="/edit/:id">
          <Form  blogs={blogs} setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/Form">
          <Form setToggleFetch={setToggleFetch}/>
        </Route>

         <Route path="/CommentBox">
          <CommentBox  setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/blog/:id/Comments">
          <CommentBox  setToggleFetch={setToggleFetch}/>
        </Route>

    
     

        <Route path="LikeButton" >
            <LikeButton />
        </Route>
        <Route path="/blog/:id/likes" >
            <LikeButton setToggleFetch={setToggleFetch}/>
        </Route>


{/* 
        <Route path={`/Blog/${blog.id}`}>
        <Link to={`/Blog/${blog.id}`}><Comment setToggleFetch={setToggleFetch}/></Link>
        </Route> */}
  
    </div>
     );
}

export default App;

