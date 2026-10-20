DROP DATABASE IF EXISTS biblioteca;

CREATE DATABASE biblioteca;
USE biblioteca;

-- 1. TABELA DE AUTORES --
CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(150) NOT NULL,
    nacionalidade VARCHAR(80) NOT NULL,
    data_nascimento DATE
);

-- 2. TABELA DE LIVROS --
CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    ano_publicacao YEAR,
    numero_paginas INT,
    sinopse TEXT
);
-- 3. TABELA DE GENEROS --
CREATE TABLE generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL
);

-- 4. TABELA DE USUARIOS --
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cpf VARBINARY(20) NOT NULL,
    cpf_iv BINARY(12) NOT NULL,
    cpf_tag BINARY(16) NOT NULL,
    nome_completo VARCHAR(150) NOT NULL,
    data_aniversario DATE NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    phone_number BIGINT NOT NULL UNIQUE,
    senha_hash BINARY(64) NOT NULL,
    senha_salt BINARY(16) NOT NULL
);

-- 5. RELACIONAMENTO AUTORES x LIVROS --
CREATE TABLE autores_has_livros (
    autores_id INT,
    livros_id INT,

    PRIMARY KEY (autores_id, livros_id),

    FOREIGN KEY (autores_id) REFERENCES autores(id),
    FOREIGN KEY (livros_id) REFERENCES livros(id)
);

-- 6. RELACIONAMENTO LIVROS x GENEROS --
CREATE TABLE livros_generos (
    livros_id INT,
    generos_id INT,

    PRIMARY KEY (livros_id, generos_id),
    FOREIGN KEY (livros_id) REFERENCES livros(id),
    FOREIGN KEY (generos_id) REFERENCES generos(id)
);

-- 7. TABELA DE EMPRESTIMOS --
CREATE TABLE emprestimos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_emprestimo DATE,
    data_devolucao DATE,
    usuarios_id INT,
    livros_id INT,

    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id),
    FOREIGN KEY (livros_id) REFERENCES livros(id)
);