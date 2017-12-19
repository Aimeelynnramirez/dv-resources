import React, { Component } from 'react';
// import logo from './logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
        <header className="App-header">
          <Grid fluid>
          
        <Row> <h1 className="App-title">Welcome.</h1>
 <Col xsOffset={11} xs={1} />

         <img src="https://i.imgur.com/diJit8O.png" className="App-test" />
                  <img src='https://i.pinimg.com/originals/cc/ea/3c/ccea3ceb5d1cc287c84f3c4627679a8e.jpg' className="App-light" />

        </Row>
      </Grid>
     </header>

        <p className="App-intro">
          <p>Welcome to a Resource Site for DV survivor.</p>
          <code>It is wrong but it's ok. You are ok.</code>
          <p>Take a stand.</p>
                 <img src="https://i.imgur.com/UdErcrT.png" className="App-chat"/>


          <h1><a href="http://webserver.ripn.state.ri.us/Statutes/TITLE15/INDEX.HTM">RI State Law</a></h1>
          <p> <a href="http://webserver.ripn.state.ri.us/Statutes/TITLE15/15-15/INDEX.HTM">Index of Sections</a></p>
                    <p> <a href="http://webserver.ripn.state.ri.us/Statutes/TITLE15/15-15/15-15-5.HTM">Domestic Abuse Prevention</a></p>
            <h2>Get Help:</h2>
                        <p><a href="http://www.sojournerri.org"> SojournerRI </a></p>
                        <p><a href="https://www.helprilaw.org"> Rhode Island Legal Services </a></p>
                                                <p><a href="https://www.grants.gov/"> Grants.gov </a></p>
                                                <p><a href="https://capitalgoodfund.org/en/"> CaptialGoodFund </a></p>
                                                <p><a href="https://www.grants.gov/"> Grants.gov </a></p>
                                                 <img src="https://i.imgur.com/qWHuk4y.jpg" className= "App-quote" />

       <h5>This site is made by a survivor. </h5>
<img src="https://i.imgur.com/SKjfaOX.png" className="App-profile"/>        </p>
      </div>

        );
    }
}

export default App;
