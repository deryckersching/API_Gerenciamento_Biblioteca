CREATE DATABASE IF NOT EXISTS biblioteca;

USE biblioteca;

-- 1. TABELA DE AUTORES
CREATE TABLE IF NOT EXISTS autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(150) NOT NULL,
    nacionalidade VARCHAR(80) NOT NULL,
    data_nascimento DATE
);

-- 2. TABELA DE LIVROS
CREATE TABLE IF NOT EXISTS livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    ano_publicacao YEAR NOT NULL,
    numero_paginas INT NOT NULL,
    sinopse TEXT
);

-- 3. TABELA DE GÊNEROS
CREATE TABLE IF NOT EXISTS generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- 4. TABELA DE USUÁRIOS
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(150) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefone VARCHAR(20) UNIQUE NOT NULL,
    data_nascimento DATE
);

-- 5. RELACIONAMENTO ENTRE AUTORES E LIVROS
CREATE TABLE IF NOT EXISTS autores_has_livros (
    autores_id INT NOT NULL,
    livros_id INT NOT NULL,

    PRIMARY KEY (autores_id, livros_id),

    FOREIGN KEY (autores_id)
        REFERENCES autores(id),

    FOREIGN KEY (livros_id)
        REFERENCES livros(id)
);

-- 6. RELACIONAMENTO ENTRE LIVROS E GÊNEROS
CREATE TABLE IF NOT EXISTS livros_has_generos (
    livros_id INT NOT NULL,
    generos_id INT NOT NULL,

    PRIMARY KEY (livros_id, generos_id),

    FOREIGN KEY (livros_id)
        REFERENCES livros(id),

    FOREIGN KEY (generos_id)
        REFERENCES generos(id)
);

-- 7. TABELA DE EMPRÉSTIMOS
CREATE TABLE IF NOT EXISTS emprestimos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    usuarios_id INT NOT NULL,
    livros_id INT NOT NULL,

    FOREIGN KEY (usuarios_id)
        REFERENCES usuarios(id),

    FOREIGN KEY (livros_id)
        REFERENCES livros(id)
);