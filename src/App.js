import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/"><h1>Home</h1></Route>
            <Route path="/add" ><h1>Add</h1></Route>
          </Switch>
        </div>
      </Router>
      <Button variant="dark">Dark</Button>
    </div>
  );
}

export default App;
