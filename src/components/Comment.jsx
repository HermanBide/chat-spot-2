import React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
// import { baseURL, config } from "../services";
import './Comment.css'
// import axios from 'axios';

function Comment(props) {
    const params = useParams();
    // const { username, comment } = props.comments.fields;
    const comments = props.comments.find((comment) => comment.id === params.id);

    if (!comments) {
        return <h2>Loading...</h2>;
      }
 
    return (
        <div className="comment-container">
            <div className="comment-card">
             <h4>
                 {comments.fields.username}
             </h4>
             <p>
                {comments.field.comment}
                 ...blog
                 this is my comment for the post 
             </p>
            </div>
        </div>
    )
}

export default Comment
