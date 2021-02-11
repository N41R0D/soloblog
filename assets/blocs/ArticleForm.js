import React, { Component, useEffect, useState } from 'react';
import articlesApi from "../api/ArticlesApi";
import { Button, Card, Form } from 'react-bootstrap';
import formService from "../api/formService";

const ArticleForm = () => {
    const [article, setArticle] = useState({
        title:"",
        content:"",
        categories:false
    });

    const [error, setError] = useState('');

    const handleChange = (event) => formService.handleChange(event, article, setArticle);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(event);
        console.log(article);

        // articlesApi.create(article).then((id) => {
        //     setError("");
        //     history.push('/article/'+id);
        // })
    }

    return (
        <div className="body">
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={article.title}
                        onChange={handleChange} type="text" name="title" placeholder="Article title" />
                </Form.Group>
                <Form.Group controlId="formContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        value={article.content}
                        onChange={handleChange} name="content" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="formSelectCateg">
                    <Form.Label>Categories</Form.Label>
                    <Form.Control
                        value={article.categories}
                        onChange={handleChange} name="categories" as="select" >
                        <option>sport</option>
                        <option>culture</option>
                        <option>gaming</option>
                        <option>osef</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ArticleForm;