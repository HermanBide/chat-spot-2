import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle"></span>
        <form className='loginForm'>
            <label>Email</label>
            <input type="text" className="loginInput" placeholder='Enter your email...' />
            <label>password</label>
            <input type="text" className="loginInput" placeholder='Enter your password...' />
            <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>Register</button>
    </div>
  )
}

export default Login