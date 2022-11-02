const { getPackage } = require("./npm");
const { askName } = require("./askName");

const main = async () => {
    const name = askName();
    const package = await getPackage(name);

    if (!package) {
        console.log(`O pacote ${name} não é um pacote NPM`)
    } else {
        console.log(`O pacote ${name} é um pacote NPM`)
    }

    console.log(package);
};

main();