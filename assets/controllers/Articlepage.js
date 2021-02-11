import React, { Component } from 'react';
import Header from "../blocs/Header";
import ArticleDetails from "../blocs/ArticleDetails";

const Articlepage = ({match}) => {
    return (
        <div>
            <Header></Header>
            <ArticleDetails idarticle={match.params.articleId}></ArticleDetails>
        </div>
    );
}
export default Articlepage;
