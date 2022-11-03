const connection = require('./connection');

// o task seria justamente a tabela!
// na workbench o nome da tabela é tasks ? pq na linha 7 fica tasks, n posso deixar apenas task ?
// como que ele acessa o db.task (tabela ?) vou ver dps

// const insert = async (task) => conn.execute(
//     'INSERT INTO tasks (nome, descricao) VALUES (?, ?)',
//     [task.nome, task.descricao],
// );

const insertTask = async ({ nome, descricao }) => {
    const query = `
    INSERT INTO tasks (nome, descricao) VALUES (?, ?)
    `;
    const [result] = connection.execute(query, [nome, descricao]);
    console.log(result);
    return result.insertId;
};

// const update = (task) => conn.execute(
//     'UPDATE tasks SET nome = ?, descricao = ? WHERE id = ?',
//     [task.nome, task.descricao],
// );

// const remove = (id) => conn.execute(
//     'DELETE FROM tasks WHERE id = ?',
//     [id],
// );

// const findAll = () => conn.execute(
//     'SELECT * FROM tasks',
// );

// const findById = () => conn.execute(
//     'SELECT * FROM tasks WHERE id = ?',
//     [id],
// );

module.exports = {
    insertTask,
    // update,
    // remove,
    // findAll,
    // findById,
  };

// // doc update p/ lembrar-se
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;