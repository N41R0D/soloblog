
import './styles/app.css';
// import './bootstrap';
import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import Homepage from "./controllers/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';

// import './styles/bootstrap.min.css';


function App() {
    return (
        <HashRouter>
            {/*<Switch>*/}
            <Route path="/" component={Homepage} />
            {/*</Switch>*/}
        </HashRouter>
    );

}
ReactDOM.render(<App />, document.getElementById('root'));
;