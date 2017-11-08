// let's go!
import React from 'react';

import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import components.
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const router = (
    <Router>
        <Main>
            <Switch>
                <Route exact path="/" component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </Switch>
        </Main>
    </Router>
)

render(router, document.getElementById('root'));
