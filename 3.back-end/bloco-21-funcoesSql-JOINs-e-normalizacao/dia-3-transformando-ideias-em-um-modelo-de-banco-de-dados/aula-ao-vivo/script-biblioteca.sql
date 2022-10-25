CREATE DATABASE IF NOT EXISTS biblioteca;

USE biblioteca;

CREATE TABLE Autor(
autor_id INT PRIMARY KEY auto_increment,
nome VARCHAR(45)
);

CREATE TABLE Categoria(
categoria_id INT primary key auto_increment,
nome varchar(45)
);

CREATE TABLE Cliente(
cliente_id INT primary key auto_increment,
nome varchar(45)
);

CREATE TABLE Livro(
livro_id INT PRIMARY KEY,
titulo varchar(70),
autor_id int NOT NULL,
categoria_id INT NOT NULL,
FOREIGN KEY (autor_id) REFERENCES Autor (autor_id),
FOREIGN KEY (categoria_id) REFERENCES Categoria (categoria_id)
);

CREATE TABLE Historico (
    livro_id INT NOT NULL,
    cliente_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (livro_id , cliente_id),
    FOREIGN KEY (livro_id)
        REFERENCES Livro (livro_id),
    FOREIGN KEY (cliente_id)
        REFERENCES Cliente (cliente_id)
);
