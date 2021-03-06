import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {


  render () {
    return (
       <div>

        <div className="app-wrapper">
          <Link className="link" to="Home">Home</Link>
          <Link className="link" to="About">About</Link>
          <Link className="link" to="Contact">Contact</Link>
        </div>

        <div>
            {this.props.children}
        </div>

        <div className="footer">
          <code>this is a footer</code>
        </div>

       </div>
     );
    }

 }

export default App;
