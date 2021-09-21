import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom'
import Form from './components/Form';
import Blog from './components/Blog';
import Advices from './components/Advices';
import CommentBox from './components/CommentBox'


function App() {
    return (
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          
        </Route>
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/Advices">
          <Advices />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
        <Route path="/CommentBox">
          <CommentBox />
        </Route>
      </Switch>
    </div>
     );
}

export default App;