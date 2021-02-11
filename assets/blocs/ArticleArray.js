import React, { Component, useEffect, useState } from 'react';
import articlesApi from "../api/ArticlesApi";
import { Link, withRouter } from "react-router-dom";
import { Table} from 'react-bootstrap';
import ArticlesApi from "../api/ArticlesApi";

const ArticleArray = () => {
    const [listArt, setListArt] = useState([]);

    const handleDelete = (id) => {
        console.log(id); //en fait on passe dedans a chaque ligne du tableau (du coup ca suppr tout), bon il est trop tard pour que je trouve ce que j'aurai du faire, mais au moins la ligne dessous fonctionne
        // ArticlesApi.deleteArticle(2);
    }

    useEffect(async() => {
        try {
            const articles = await articlesApi.findAll();
            setListArt(articles);
        } catch (error) {
            console.log(error)
        }
    },[])

    return (
        <div>
            <p>Hello World</p>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Categories</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {listArt.map((article)=>{
                    return (
                        <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.title}</td>
                            <td>{article.date}</td>
                            <td>{article.categories}</td>
                            <td><a onClick={handleDelete(article.id)}>Delete</a></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
    )
}

export default ArticleArray;
