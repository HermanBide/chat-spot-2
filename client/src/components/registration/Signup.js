import React, {useState} from "react";
import { registerUser } from "../../services/index";
import { useHistory } from "react-router";
import './Signup.css'
import { Link } from 'react-router-dom'


const Signup = (props) => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  
  const history = useHistory();

  const handleSubmit = async (e) => {
    setError(false)
    try {
      e.preventDefault();
      const userInfo = {
        username, email, password
      };
      const user = await registerUser(userInfo);
      props.setUser(user);
      history.push("/home")

    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="signup">
      <span className="signupTitle"></span>
      <form className="signupForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="signupInput"
          placeholder="Enter your username..."
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
          <label>Email</label>
        <input
          type="text"
          className="signupInput"
          placeholder="Enter your email..."
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="text"
          className="signupInput"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) =>setPassword(e.target.value)}
        />
        <button className="signupButton" type="submit">Signup</button>
      </form>
      <button className="login-Button">
      <Link to="/login" className="link"
            style={{ textDecoration: "none", color: "inherit" }}>Login</Link>
      </button>
      { error && <span style={{color:"purple", marginTop:"10px" }}> Something went wrong! </span>}
    </div>
  );
};

export default Signup;
