import React, { Component } from 'react';
import Header from "../blocs/Header";
import ArticleArray from "../blocs/ArticleArray";

const Articleadmin = ({match}) => {
    return (
        <div>
            <Header></Header>
            <ArticleArray></ArticleArray>
        </div>
    );
}
export default Articleadmin;
