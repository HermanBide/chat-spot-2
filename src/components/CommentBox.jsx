import React from 'react'
import './CommentBox.css'
import axios from 'axios'
import {  useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { baseURL, config } from "../services"

function CommentBox(props) {


    const [ comment, setComment ] = useState("");
    const params = useParams();
    const history = useHistory();


    useEffect(() => {
        if(params.id) {
            const blog = props.blogs.find((blog) => blog.id === params.id);
            if(blog) {
                setComment(blog.field.comments === params.id)
            }
        }
        // const fetchBlog = async () => {
        //     if(params.id === blog.id) {
        //         return
        //     }
        // }

    },[params.id, props.blogs])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // create a new object called newCharacter (holding all our data from state)
        const newBlog = {
          comment,
        }
        // make a POST request to our endpoint (same as GET), pass our newCharacter as the data, and pass our config to allow ourselves entry into the database
        // if (params.id) {
        //   const blogURL = `${baseURL}/${params.id}`;
        //   await axios.put(blogURL, { fields: newBlog }, config);
        // } else {
          await axios.post(baseURL, { fields: newBlog }, config);
        // }
        // trigger our useEffect
        props.setToggleFetch((curr) => !curr);
        history.push("/Blog")
      }




    return (
        <div>
            <div className="comment-box">
                <h2>Comment</h2>
                <form action="" onSubmit={handleSubmit}>
                        {/* <label for="message" className="comment-label">Comment</label>  */}
                        <textarea 
                            className="comment-control"  
                            id="text" 
                            type="text" 
                            placeholder="Start writing..."
                            required
                            tabIndex="1"
                            cols="30"
                            rows="10"
                            value={comment} autoComplete="off"
                            onChange={(e) => setComment(e.target.value)}
                        />
                     <button type="submit" className="btn">Submit Comment !</button>
                </form>
            </div>
        </div>
    )
}

export default CommentBox
