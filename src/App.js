import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="container">
          <div className="row navbar">
            <h1>Hello, world.</h1>
            <p>
              I set up this project to familiarize myself with setting up react app from scratch
            </p>
          </div>

          <footer>
            <p>
              Mbuvi
              {' '}
              <i className="fa fa-copyright fa-fw" />
              {' '}
              2018. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
