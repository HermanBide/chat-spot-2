import React from 'react'
import './CommentBox.css'
import axios from 'axios'
// import { useEffect } from 'react'
import {  useState} from 'react'
import { useParams, useHistory } from "react-router-dom";
import { baseURL, config } from "../services"

function CommentBox(props) {


    // const [ username, setUsername ] = useState("");
    const [ comment, setComment ] = useState("");
    const params = useParams();
    const history = useHistory();

    //when you want to edit the comment//
    // useEffect(() => {
    //     if(params.id) {
    //         const comments = props.comments.find((comment) => comment.id === params.id);
    //         if(comment) {
    //             setComment(comments.field.comments)
    //             setUsername(comments.field.username)
    //         }
    //     }
    // },[params.id, props.blogs])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // create a new object called newCharacter (holding all our data from state)
        const newComment = {
            // username,
            comment,
            blog : [params.id]
        }
        // make a POST request to our endpoint (same as GET), pass our newCharacter as the data, and pass our config to allow ourselves entry into the database
        // if (params.id) {
        //   const blogURL = `${baseURL}/${params.id}`;
        //   await axios.put(blogURL, { fields: newBlog }, config);
        // } else {
            // await axios.get(baseURL+"/blog/", { })
          await axios.post(baseURL+"/Comments", { fields: newComment }, config);
        //   await axios.put(`/Blog/${id}`)
        // }
        // trigger our useEffect
        props.setToggleFetch((curr) => !curr);
        history.push(`/Blog/${params.id}`)
      }




    return (
        <div>
            <div className="comment-box">
            {/* <h2>Comment</h2> */}
                <form action="" className="form" onSubmit={handleSubmit}>
                <h2>Comment</h2>
                        {/* <label for="message" className="comment-label">Comment</label>  */}
                        {/* <input className="form-control" id="username" type="text" value={username} autoComplete="off"
                            placeholder="username"
                            required
                            tabIndex="1"
                            onChange={(e) => setUsername(e.target.value)}
                            /> */}
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
