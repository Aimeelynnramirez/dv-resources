import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
                    <img src='https://ncadv.org/assets/2497/takeastand_v05.png' className="App-test" />
                    
          <h1 className="App-title">Welcome</h1>
          <img src='https://i.pinimg.com/originals/cc/ea/3c/ccea3ceb5d1cc287c84f3c4627679a8e.jpg' className="App-light" />
                  </header>
        <p className="App-intro">
          <p>Welcome to a Resource Site for DV surviors.</p>
          <code>It is wrong but it's ok. You are ok.</code> 
          <p>Take a stand.</p>

          <h1><a href="http://webserver.rilin.state.ri.us/Statutes/TITLE15/INDEX.HTM">RI State Law</a></h1>
          <li> <a href="http://webserver.rilin.state.ri.us/Statutes/TITLE15/15-15/INDEX.HTM">Index of Sections</a></li>
                    <li> <a href="http://webserver.rilin.state.ri.us/Statutes/TITLE15/15-15/15-15-5.HTM">Domestic Abuse Prevention</a></li>
            <h2>Get Help:</h2>
                        <h2><a href="http://www.sojournerri.org"> SojournerRI </a></h2>

        </p>
      </div>
    );
  }
}

export default App;
