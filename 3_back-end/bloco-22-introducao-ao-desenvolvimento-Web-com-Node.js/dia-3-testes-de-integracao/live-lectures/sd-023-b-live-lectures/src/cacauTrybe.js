const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (cacauTrybe) => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(cacauTrybe));
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const createChocolate = async (chocolateRequest) => {
  // le o arquivo atual pra pegar os dados
  const cacauTrybe = await readCacauTrybeFile();
  // definir ID no chocolate
  const chocolate = {
    id: cacauTrybe.nextChocolateId,
    ...chocolateRequest
  }
  // inserir o novo chocolate
  cacauTrybe.chocolates.push(chocolate);
  // atualizar o id do trybefile.json
  cacauTrybe.nextChocolateId += 1;
  // escrever o arquivo
  await writeCacauTrybeFile(cacauTrybe);

  // return para o app
  return chocolate;
};

// EXTRA: não feito em aula
const deleteChocolate = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateExists = cacauTrybe.chocolates.some(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateExists) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.filter(
      (chocolate) => chocolate.id !== id,
    );
  
    await writeCacauTrybeFile(cacauTrybe);
    return true;
  }

  return false;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  readCacauTrybeFile,
  createChocolate,
  deleteChocolate
};
