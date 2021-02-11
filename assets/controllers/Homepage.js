import React, { Component } from 'react';
import ArticleList from "../blocs/ArticleList";
import Header from "../blocs/Header";

const Homepage = () => {

    return (
        <div>
            <Header></Header>
            <ArticleList />
        </div>
    );
}
export default Homepage;
