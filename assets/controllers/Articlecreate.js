import React, { Component } from 'react';
import Header from "../blocs/Header";
import ArticleForm from "../blocs/ArticleForm";

const Articlepage = ({match}) => {
    console.log(match.params.articleId)
    return (
        <div>
            <Header></Header>
            <ArticleForm></ArticleForm>
        </div>
    );
}
export default Articlepage;
