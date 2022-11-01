const { readFile } = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'movies.json');

const getAllMovies = async () => {
    const content = JSON.parse(await readFile(filePath));
    return content
    // retorna o arquivo em .json, p transformar coloca o JSON.parse
}

getAllMovies()

module.exports = getAllMovies;