import React from 'react'
import './Form.css'
import { useState, useEffect } from 'react' 
import axios from 'axios'
import { useParams, useHistory } from "react-router-dom";
import { baseURL, config } from "../services"
// import TextField from 'material-ui/TextField';

function Form(props) {

    const [ username, setUsername ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ detail, setDetail ] = useState("");
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        if(params.id) {
            const blog = props.blogs.find((blog) => blog.id === params.id);
            if(blog) {
                setUsername(blog.field.username)
                setTitle(blog.field.title);
                setDetail(blog.field.detail)
            }
        }
    }, [params.id, props.blogs]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // create a new object called newCharacter (holding all our data from state)
        const newBlog = {
          username,
          title,
          detail,
        }
        // make a POST request to our endpoint (same as GET), pass our newCharacter as the data, and pass our config to allow ourselves entry into the database
        // if (params.id) {
        //   const blogURL = `${baseURL}/${params.id}`;
        //   await axios.put(blogURL, { fields: newBlog }, config);
        // } else {
          await axios.post(baseURL, { fields: newBlog }, config);
        
        // trigger our useEffect
        props.setToggleFetch((curr) => !curr);
        history.push("/")
      }

    return (
        <div className="body">

        <div className="form-box">
        <h2>Write a blog.</h2>
          
            <form action="" onSubmit={handleSubmit}>

                <input className="form-control" id="username" type="text" value={username} autoComplete="off"
                placeholder="username"
                required
                tabIndex="1"
                onChange={(e) => setUsername(e.target.value)}
                />
                
                <input className="form-control" id="title" type="text" placeholder="title" value={title} autoComplete="off"
                required
                tabIndex="2"
                onChange={(e) => setTitle(e.target.value)}
                />

                <textarea 
                    className="form-control"  
                    id="message" 
                    type="message" 
                    placeholder="Start writing..."
                    required
                    tabIndex="3"
                    cols="40"
                    rows="10"
                    value={detail} autoComplete="off"
                    onChange={(e) => setDetail(e.target.value)}
                />
                <button type="submit" className="button">share Message!</button>
            </form>
            </div>
        </div>
    )
}

export default Form
