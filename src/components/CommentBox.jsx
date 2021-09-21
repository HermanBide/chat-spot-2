import React from 'react'
import './CommentBox.css'
// import { useState } from 'react';

function CommentBox() {

    // const [ input, setInput ] = useState("");
    // const [ count, setCount ] = useState(0)

    
//     const increment = () => { 
//         count = count + 1;
//     }

//     const decrement = () => { 
//         count = count - 1;
//    }


    // const handleChange = () => {
    //     e.preventDefault();
    //     const post = {
    //         username: '',
    //         comment: '',

    //     }
    // }


    return (
        <div>
            <div className="comment-box">
                <h2>Comment</h2>
                <form action="">
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
                        />
                     <button type="submit" className="btn">Submit Comment !</button>
                </form>
            </div>
        </div>
    )
}

export default CommentBox
