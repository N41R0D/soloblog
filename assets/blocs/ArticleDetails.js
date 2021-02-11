import React, { Component, useEffect, useState } from 'react';
import articlesApi from "../api/ArticlesApi";
import moment from "moment";


const ArticleDetails = (props) => {
    const [DetailArt, setDetailArt] = useState([]);

    useEffect(async() => {
        try {
            const articles = await articlesApi.getArticle(props.idarticle);
            setDetailArt(articles);
        } catch (error) {
            console.log(error)
        }
    },[])

    return (
        <div>
            <h3>{DetailArt.title}</h3>
            <p>{moment(DetailArt.date).format('DD-MM-YYYY')}</p>
            <p>{DetailArt.content}</p>
            {console.log(DetailArt)}
        </div>
    )
}

export default ArticleDetails;
