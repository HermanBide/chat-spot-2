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



function App() {

    const [ toggleFetch, setToggleFetch ] = useState(false);
    const [ blogs, setBlogs ] = useState([])
    // const [articles, setArticles ] = useState([]);
    // const [term, setterm ] = useState("everything");
    //  const [isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
          
        const getBlog = async () => {
          // const nytURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLE_KEY_API}`;

            const response = await axios.get(baseURL, config)
            // const res = await axios.get( baseURL, config)
            setBlogs(response.data.records)
        } 
        getBlog();
    },[toggleFetch]);

    return (
      <div className="App">
      <Navbar />

        <Route exact path="/">
        <header className="header">
          <div className="article-container">
            <div className="article-card">
              <div className="card-image">
              
              </div>
              <div className="card-text">
              
              </div>
              <div className="card-stats">
              
              </div>
                <span></span>
                <h1>title</h1>
            </div>
            article
          </div>
        </header>

        <section className="blog-section">
          <div className="blog-container">
          { blogs.map((blog) => (
            <Link to={`/Blog/${blog.id}`}><Blog key={blog.id} blog={blog} setToggleFetch={setToggleFetch} /></Link>
          ))}
          
          </div>
        </section>

        <footer className="footer">
          <div>
            footer
          </div>
        </footer>
        </Route>

        <Route path="/Blog/:id">
          <BlogPage blogs={blogs} setToggleFetch={setToggleFetch}/>
        </Route>

        <Route path="/Advices">
          <Advices />
        </Route>

        <Route path="/edit/:id">
          <Form  blogs={blogs}
            setToggleFetch={setToggleFetch}
          />
        </Route>


        <Route path="/Form">
          <Form 
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <Route path="/CommentBox">
          <CommentBox  setToggleFetch={setToggleFetch}/>
        </Route>
  
    </div>
     );
}

export default App;