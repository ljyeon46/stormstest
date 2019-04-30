import React from 'react';
import {Switch, Route} from 'react-router-dom';
import '../styles/base';
import {CustomerPage, DataPage, LoginPage, MainPage, MapPage, NotFoundPage, NoticePage, TreePage} from '../pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/customer" component={CustomerPage}/>
                <Route exact path="/data" component={DataPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/map" component={MapPage}/>
                <Route exact path="/notice" component={NoticePage}/>
                <Route exact path="/tree" component={TreePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
};

export default App;