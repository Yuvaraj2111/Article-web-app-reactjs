import React, { useState } from "react";
import Home from "../components/pages/home";
import Header from "../components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "../components/pages/articles";
import Post from "../components/pages/postArticle";
import Auth from "../components/Auth"

function Routes() {
    const [showHead, setShowHead] = useState(true)
    return (
        <Router>
            {
                showHead &&
                <Header />
            }
            <div style={{ marginTop: "3.5em" }}></div>
            <Switch>
                <Route path="/signin" component={() => <Auth set={setShowHead} />} />
                <Route exact path="/" component={Home} />
                <Route path="/article" component={Article} />
                <Route path="/postArticle" component={Post} />
            </Switch>
        </Router>
    );
}

export default Routes;
