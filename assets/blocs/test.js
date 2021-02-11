import React, { Component } from "react";
import axios from "axios";
import './Admin.scss'

class Admin extends Component {
    constructor() {
        super();

        this.state = { users: [], loading: true };
    }
    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        var url = "https://127.0.0.1:8000/api/articles/";
        axios
            .get(url, {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((res) => {
                const users = res.data;
                this.setState({ users, loading: false });
            });
    }
    render() {
        const loading = this.state.loading;
        return (
            <div>
                <section className="row-section">
                    {loading ? (
                        <div className={"row text-center"}>
                            <span className="fa fa-spin fa-spinner fa-4x"></span>
                        </div>
                    ) : (
                        <div>
                            <table id="customers">
                                <thead>
                                <tr>
                                    <th>ID Article</th>
                                    <th>Nom Article</th>
                                    <th>Éditer</th>
                                    <th>Supprimer</th>
                                </tr>
                                </thead>
                                {this.state.users.map((post) => (
                                    <tbody>
                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.title}</td>
                                    </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    )}
                </section>
            </div>
        );
    }
}
export default Admin;