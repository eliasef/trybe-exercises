const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, 'simpsons.json');

// eslint-disable-next-line no-unused-vars
const getSimpsonById = async (id) => {
  const content = await readFile(filePath, 'utf-8');
  const arr = JSON.parse(content);
  const simpson = arr.find((e) => Number(e.id) === Number(id));
  return simpson;
};

const insertNewSimpson = async (name) => {
  const content = JSON.parse(await readFile(filePath, 'utf-8'));
  const nestContent = [...content, { id: `${content.length + 1}`, name }];
  await writeFile(filePath, JSON.stringify(nestContent, null, 2));
  return content;
};

insertNewSimpson('Carlos').then(console.log);