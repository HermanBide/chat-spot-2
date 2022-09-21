import React, { useState} from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/index";
import { useHistory } from "react-router";
// import { Context } from "../../context/Context";
import "./Login.css";

const Login = (props) => {
  const [ username ,setUsername ] = useState("")
  const [ password ,setPassword ] = useState("")

  const history = useHistory();

  function successLogin() {
    alert("You have Logged in!!!");
    history.push("/home");
  }

  function failedLogin() {
    alert("wrong username & password combination");
    history.push("/Login");
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        password,
      };
      const user = await loginUser(userInfo);
      props.setUser(user);
      if (user) {
        successLogin();
      } else {
        failedLogin();
      }
      // history.push("/home");
      // if((userInfo === user) && (userInfo === user)) {
      // }
    } catch (error) {
      console.error(error.message);
    }
  };


  // const userRef = useRef();
  // const passwordRef = useRef();
  // const {user, dispatch, isFetching } = useContext(Context);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", {
  //       username: userRef.current.value,
  //       pasword: passwordRef.current.value,
  //     });
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //   } catch (error) {
  //     dispatch({ type: "LOGIN_FAILURE" });
  //   }
  // };

  return (
    <div className="login">
      <span className="loginTitle"></span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // ref={userRef}
        />
        <label>password</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          // ref={passwordRef}
        />
        <button className="loginButton">Login</button>
      </form>
      <button
        className="loginRegisterButton"
        type="submit"
        // disabled={isFetching}
        alert="login successful"
      >
        <Link
          to="/signup"
          className="link"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Signup
        </Link>
      </button>
    </div>
  );
};

export default Login;
