// npm init -y

// touch index.js

// npm i readline-sync@1.4 -D

// package.json > scripts > ,"start": "node index.js"

// npm docs readline-sync

// askName.js

const readlineSync = require('readline-sync');

const askName = () => readlineSync.questionInt('Qual o nome do pacote ?');

module.exports = { askName }

// npm.js

// npm i node-fetch -d

const fetch = require('node-fetch');

const API = 'https://...registry.com';

const getPackage = async (name) => {
    try {
        const response = await fetch(`${API}/${name}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Ops... Something is wrong ${error}`)
        return error;
    }
}

module.exports = { getPackage }

// index.js

const { askName } = require("./askName.js")
const { getPackage } = require("./npm.js")

const main = async () => {
  const name = askName();
  const fetchPackage = await getPackage(name)

  if (fetchPackage) {
    console.log(`O pacote ${name} é um pacote NPM!`)
  } else {
    console.log(`O pacote ${name} não é um pacote NPM!`)
  }

  console.log(fetchPackage)
}

main();