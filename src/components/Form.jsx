import React from 'react'
import './Form.css'
// import { useState } from 'react' 
// import TextField from 'material-ui/TextField';

function Form() {

    // const [ input, setInput ] = useState("");


    // const handler = () => {
    //     e.preventDefault();
    //     const post = {
    //         username: '',
    //         title: '',
    //         detail: '',

    //     }
    // }
    return (
        <div className="body">
          
            <form action="" className="form-container">
                {/* <TextField /> */}
                <div className="group"></div>
                <label for="username" className="form-label">username</label>
                <input className="form-control" id="username" type="text" 
                placeholder="..."
                required
                tabIndex="1"
                />
                
                <div className="group">
                <label for="title" className="form-label">Title</label>
                <input className="form-control" id="title" type="text" placeholder="..."
                required
                tabIndex="2"
                />
                </div>
                
                <div className="group">
                <label for="message" className="form-label">detail</label> 
                <textarea 
                    className="form-control"  
                    id="message" 
                    type="message" 
                    placeholder="Start writing..."
                    required
                    tabIndex="3"
                />
                </div>

                <button type="submit" className="button">share Message!</button>
            </form>
        </div>
    )
}

export default Form
