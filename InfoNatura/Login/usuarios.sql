CREATE DATABASE usuarios;
USE usuarios;

CREATE TABLE usuario (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email VARCHAR(45),
    telefone VARCHAR(15),
    data_nasc DATE,
    pais VARCHAR(20),
    senha VARCHAR(20) NOT NULL,
    professor BIT,
    nome VARCHAR(50)
);