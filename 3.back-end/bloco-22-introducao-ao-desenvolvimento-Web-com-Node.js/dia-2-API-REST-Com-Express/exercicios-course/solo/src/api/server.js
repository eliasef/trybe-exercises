const app = require('./app')

const PORT = 3003;

console.log(__dirname)

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

