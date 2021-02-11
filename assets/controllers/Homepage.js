import React, { Component } from 'react';
import ArticleList from "../blocs/ArticleList";
import Header from "../blocs/Header";
import { Carousel, Button } from "react-bootstrap";

const Homepage = () => {

    return (
        <div>
            <Header></Header>
            <ArticleList />
        </div>
    );
}
export default Homepage;
