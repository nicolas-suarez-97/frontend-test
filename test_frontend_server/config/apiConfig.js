const axios = require('axios');
require('dotenv').config({path: 'variables.env'});

const baseUrl = process.env.BASE_URL;

exports.getSearchByQuery = async (query) => {
    const url = '/sites/MLA/search?q=';
    const config = {
        method: 'get',
        url: baseUrl+url+query
    }

    try {
        return await axios(config);
    } catch (error) {
        return;
    }
}

exports.getItemById = async (id) => {
    const url = '/items/';
    const config = {
        method: 'get',
        url: baseUrl+url+id
    }

    try {
        return await axios(config);
    } catch (error) {
        return;
    }
}

exports.getItemDescription = async (id) => {
    const url = '/items/';
    const config = {
        method: 'get',
        url: baseUrl+url+id+'/description'
    }

    try {
        return await axios(config);
    } catch (error) {
        return;
    }
}

