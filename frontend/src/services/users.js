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

const fixLS = (setUser = true) => {
    return allUsers()
        .then(({ data }) => {
            if (setUser) localStorage.setItem('showUser', JSON.stringify(data[0]));
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

const switchUser = (id) => {
    const showUsers = JSON.parse(localStorage.getItem('showUsers'));
    for (let user of showUsers) {
        if ( parseInt(id) === user.id){
            localStorage.setItem('showUser', JSON.stringify(user));
            return true
        };
    };
    return false;
};

const init = (id = null) => {
    /*
        init will always check localStorage to make sure it's populated
        this is assuming that the database has valid entries. 
        TO DO:
        if nothing exists in the DB, populate the DB with default info, then call init again.
    */
    return new Promise((resolve, reject) => {
        const showUser = localStorage.getItem('showUser');
        const showUsers = localStorage.getItem('showUsers');
        const showGenres = localStorage.getItem('showGenres');
        if (showUser === 'undefined' || !showUser || showUsers === 'undefined' || !showUsers) return resolve(fixLS());
        if (showUser !== 'undefined' && showUser && (showUsers === 'undefined' || !showUsers)) return resolve(fixLS(false));       
        if (showGenres === 'undefined' || !showGenres) genres();
        if (!id) {
            return resolve({
                showUser: JSON.parse(showUser),
                showUsers: JSON.parse(showUsers)
            });
        } else {
            /*
                If false is returned, user was not switched.
                Else if true is returned, user was successfuly updated in Local storage.
            */
            if (!id.match(/[0-9]/g)) {
                return reject(false);
            };
            return resolve(switchUser(id));
        };
    });
};

export default {
    fixLS,
    init,
    get,
    post,
    getGenres
};