import axios from "axios"
import jwtDecode from "jwt-decode";

const url = "https://localhost:8000/api/";

axios.defaults.headers['Accept'] = 'application/json';
axios.defaults.headers['Content-Type'] = 'application/json';

function findAll() {
    return axios.get(url + 'users').then(response => response.data)
}

function getUser(id) {
    return axios.get(url + 'users/'+ id).then((response)=> response.data)
}

function create(user) {
    return axios.post(url + 'users', user)
        .then((response) => response.data.id);
}

function loginCheck(user) {
    return axios.post(url + 'login_check', user)
        .then(token => {
            console.log(token.data.token);
            window.localStorage.setItem('authToken', token.data.token);
            _setAxiosToken(token.data.token);
            // return true;
        })
        .then((response) => response);
}

function isAuth() {
    const token = window.localStorage.getItem('authToken');
    if(token) {
        const jwtData = jwtDecode(token);

        if(jwtData.exp * 1000 > new Date().getTime()) {
            return true
        }else {
            this.logout()
        }
        return false
    }
    return false
}

function isAdmin() {
    if(isAuth()) {
        const token = window.localStorage.getItem('authToken');
        const jwtData = jwtDecode(token);
        if(jwtData.roles.find((element) => element === 'ROLE_ADMIN')) {
            return true;
        }
        return false;
    }

    return false;
}

function logout() {
    window.localStorage.removeItem('authToken');
    delete axios.defaults.headers["Authorization"];
}

function _setAxiosToken(token) {
    axios.defaults.headers["Authorization"] = "Bearer " + token;
}

export default {
    findAll,
    getUser,
    create,
    loginCheck,
    isAuth,
    isAdmin,
    logout,
}