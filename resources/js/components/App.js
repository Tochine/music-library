import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid } from 'semantic-ui-react'
import Nav from './Nav'
import MusicList from './MusicList'
import AddMusic from './AddMusic'
import EditMusic from './EditMusic'
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
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Switch>
                                    <Route path="/" exact component={MusicList} />
                                    <Route path="/addMusic" exact component={AddMusic} />
                                    <Route path="/edit/music/:id" exact component={EditMusic} />
                                </Switch>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </>
        </Router>
        
        )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}