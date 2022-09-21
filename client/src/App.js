import React from "react";
import Home from "./components/pages/Home";
import Single from "./components/pages/Single";
import Write from "./components/pages/Write";
import Settings from "./components/pages/Settings";
import Login from "./components/registration/Login";
import Signup from "./components/registration/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navigations/Navbar";

const App = () => {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup" element={<Signup/>}>{user ? <Home /> : <Signup />}</Route>
        <Route path="/login" element={<Login/>}>{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Signup />}</Route>
        <Route path="/settings"  element={<Settings/>}>{user ? <Settings /> : <Signup />}</Route>
        <Route path="/posts/:postId"  element={<Single/>}> <Single /> </Route>
      </Switch>
    </Router>
  );
};

export default App;
