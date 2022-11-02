// npm init -y (p/ iniciar projeto)

module.imports = askName;
const { askName } = require("./askName");

const name = askName();

console.log(`Hello ${name}`);