import React from 'react';
import {  useParams } from 'react-router-dom';
// import Blog from './Blog';

function BlogPage(props) {

    const params = useParams();

    const blog = props.blogs.find((blog) => blog.id === params.id)

    // console.log(blog)
    // console.log(params)

    if(!blog) {
        return (
            <h2>Loading...</h2>
            
        )
    }
    

    return (
        <div>
            {/* <Blog blog={blog} /> */}
                  <div className="card-text"> 
                        <h4>{blog.fields.username}</h4>
                        <h2>{blog.fields.title}</h2>
                        <p>{blog.fields.detail}</p>
                        <a href={blog.fields.url}> </a>
                    </div> 


        </div>
    )
}

export default BlogPage
