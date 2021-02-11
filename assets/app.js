
import './styles/app.css';
// import './bootstrap';
import React from 'react';
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import Homepage from "./controllers/Homepage";
import ArticlePage from "./controllers/Articlepage";
import ArticleCreate from "./controllers/Articlecreate";
import Loginpage from "./controllers/Loginpage";
import Articleadmin from "./controllers/ArticleAdmin";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <HashRouter>
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/article/:articleId" component={ArticlePage} />
            <Route path="/articlecreate" component={ArticleCreate} />
            <Route path="/login" component={Loginpage} />
            <Route path="/articleadmin" component={Articleadmin} />
            </Switch>
        </HashRouter>
    );

}
ReactDOM.render(<App />, document.getElementById('root'));
;