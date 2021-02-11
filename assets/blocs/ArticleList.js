import React, { Component, useEffect, useState } from 'react';
import articlesApi from "../api/ArticlesApi";
import { Link, withRouter } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

const ArticleList = () => {
    const [listArt, setListArt] = useState([]);

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
                <Card style={{ width: '18rem' }}>
                    {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                {console.log(listArt)}
                {listArt.map((article)=>{
                    return (
                        <Card style={{ width: '18rem' }} key={article.id}>
                            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary" as={Link} to={"/article/" + article.id}>Voir plus</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
}

export default ArticleList;
