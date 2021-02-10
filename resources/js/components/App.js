import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Nav from './Nav'
import MusicList from './MusicList'
import AddMusic from './AddMusic'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() { 
    return(
        <Router>
            <>
                <Nav />
                <Switch>
                    <Route path="/" exact component={MusicList} />
                    <Route path="/addMusic" exact componnent={AddMusic} />
                </Switch>
            </>
        </Router>
        
        )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}