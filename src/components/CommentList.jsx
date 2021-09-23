// import React, {useState } from 'react'
// import Comment from './Comment'


// function CommentList(props) {
//     const [ comments, setComments ] = useState([]);
//     const [ loading, setLoading ] = useState(false)

//     return (
//         <div className="comment-list">
//             <h4>
//                 <span>{props.comments.length}</span>
//                 Comment{props.comments.length > 0 ? "s" : ""}
//             </h4>  
//             {props.comments.length === 0 && !props.loading ? (
//                 <div className="loading-message">
//                     Be the first to comment
//                 </div>
//             ): null}      

//             {props.comments.map((comment, index) => (
//                 <Comment key={index} comment={comment} />
//             ))}    
//         </div>
//     )
// }

// export default CommentList
