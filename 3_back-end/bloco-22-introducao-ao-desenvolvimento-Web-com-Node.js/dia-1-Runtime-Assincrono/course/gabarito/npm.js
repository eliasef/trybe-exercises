const fetch = require('node-fetch');

const API = "https://registry.npmjs.org";

const getPackage = async (name) => {
    try {
        const response = await fetch(`${API}/${name}`);
    } catch (error) {
        console.log(error)
        return false;
    }
    
    const data = await response.json();
    return data;
};

module.exports = { getPackage }