import React, { Component } from 'react';
// import logo from './logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                    <h1 className="App-title">Welcome.</h1>

        <header className="App-header">
                 <img src="https://i.imgur.com/diJit8O.png" className="App-test" /> "Leslie Morgan Steiner was in "crazy love" -- that is, madly in love with a man who routinely abused her and threatened her life. Steiner tells the story of her relationship, correcting misconceptions many people hold about victims of domestic violence, and explaining how we can all help break the silence."

    
        <Grid fluid>
        <Row center="xs">
      <Col xs={6} />  
<p>
   <Col xs={6} />  <p>Watch the video here:< a href="https://www.ted.com/talks/leslie_morgan_steiner_why_domestic_violence_victims_don_t_leave?utm_campaign=tedspread--b&utm_medium=referral&utm_source=tedcomshare">TEDtalks</a> Ideas Worth Spreading</p>
       </p>   </Row>
      </Grid>
     </header>
                 <img src="https://i.imgur.com/qWHuk4y.jpg" className="App-quote"/>                                       

        <p className="App-intro"> <Grid fluid> <Row start="xs">
      <Col xs={6} />

               <p className="App-intro">
   <p>Welcome to a Site for DV survivors.</p>
           <code>It is wrong but it's ok. You are ok now.</code>
      <Col xs={6} />

         <p>Take a stand.</p>
         <a href="http://www.thehotline.org"><img src="https://i.imgur.com/UdErcrT.png" title="source: thehotline.org" className="App-quote" /></a>
         

          <h1><a href="http://webserver.ripn.state.ri.us/Statutes/TITLE15/INDEX.HTM">RI State Law</a></h1>
          <p> <a href="http://webserver.ripn.state.ri.us/Statutes/TITLE15/15-15/INDEX.HTM">Index of Sections</a></p>
          <p> <a href="http://webserver.ripn.state.ri.us/Statutes/TITLE15/15-15/15-15-5.HTM">Domestic Abuse Prevention</a></p>
  </p>
          <p className="App-two">

  <Col xs />

          <h2>Get Help:</h2>

                        <p> <a href="http://www.sojournerri.org"> SojournerRI </a></p>
                        <p><a href=" https://www.helpguide.org/"> HelpGuide.org </a></p>
                                                <p><a href="http://www.thehotline.org/"> National Hotline </a></p>
                                                <p><a href="https://www.helprilaw.org"> Rhode Island Legal Services </a></p>
                                                <p><a href="https://www.grants.gov/"> Grants.gov </a></p>                                               
                                                <p><a href="https://capitalgoodfund.org/en/"> CapitalGoodFund </a></p>
                                                 <p><a href="http://www.211.org/"> 211 </a></p>
                                                <p><a href="http://www.dlt.ri.gov/aboutdlt.htm"> RI Department Labor and Training</a></p>
 </p></Row>
      </Grid>
                                                
         <h5>This site is made by a survivor. </h5>
<img src="https://i.imgur.com/SKjfaOX.png?1" className="App-profile"/> 

      </p>
      </div>

        );
    }
}

export default App;
