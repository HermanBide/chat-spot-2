import React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
// import { baseURL, config } from "../services";
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Comment.css'
// import axios from 'axios';

function Comment(props) {
    const params = useParams();

    const [ count, setCount ] = useState(0);
    // const { username, comment } = props.comments.fields;
    const comments = props.comments.find((comment) => comment.id === params.id);

    if (!comments) {
        return <h2>Loading...</h2>;
      }

    const increment = () => {
        setCount(count + 1);
      };
 

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
                <div className="comment-stat">
                    <ThumbUpIcon onClick={increment}>{count}:likes</ThumbUpIcon>
                    <ThumbDownAltIcon onClick={increment}>{count}:dislikes</ThumbDownAltIcon>
                </div>
            </div>
        </div>
    )
}

export default Comment
