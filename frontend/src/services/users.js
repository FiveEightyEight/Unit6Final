import axios from 'axios';
const baseURL = 'http://localhost:5880/';


const allUsers = () => {
    return axios({
        url: baseURL + 'users/all',
        method: 'get',
    });
};

const get = (route) => {
    if (typeof route !== 'string') return Promise.reject('Params were invalid; must be strings');
    return axios({
        url: baseURL + route,
        method: 'get',
    });
};

const post = (route, data) => {
    if (typeof route !== 'string') return Promise.reject('Params were invalid; must be strings');
    return axios({
        url: baseURL + route,
        method: 'post',
        data: {
            ...data,
        }
    });
};

const fixLS = () => {
    return allUsers()
        .then(({ data }) => {
            localStorage.setItem('showUser', JSON.stringify(data[0]));
            localStorage.setItem('showUsers', JSON.stringify(data));
            return init();
        });
};

const genres = (def = false) => {
    return get('genres/all')
        .then(({ data }) => {
            localStorage.setItem('showGenres', JSON.stringify(data));
            if (def) return getGenres();
        });
};


const getGenres = () => {
    return new Promise((resolve, reject) => {
        const showGenres = localStorage.getItem('showGenres');
        if (showGenres === 'undefined' || !showGenres) return resolve(genres(true));
        return resolve({
            genres: JSON.parse(showGenres),
        });
    });
};

const init = () => {
    return new Promise((resolve, reject) => {
        const showUser = localStorage.getItem('showUser');
        const showUsers = localStorage.getItem('showUsers');
        const showGenres = localStorage.getItem('showGenres');
        if (showUser === 'undefined' || !showUser || showUsers === 'undefined' || !showUsers) return resolve(fixLS());
        if (showGenres === 'undefined' || !showGenres) genres();
        return resolve({
            showUser: JSON.parse(showUser),
            showUsers: JSON.parse(showUsers)
        });
    });
};

export default {
    fixLS,
    init,
    get,
    post,
    getGenres
};