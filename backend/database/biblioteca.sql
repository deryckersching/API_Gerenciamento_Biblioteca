USE biblioteca;
SHOW TABLES;

-- 1. TABELA DE AUTORES --
CREATE TABLE autores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(150) NOT NULL,
    nacionalidade VARCHAR(80) NOT NULL,
    data_nascimento DATE
);

INSERT INTO autores (nome_completo, nacionalidade, data_nascimento) VALUES
('Machado de Assis', 'Brasileira', '1839-06-21'),
('J.K. Rowling', 'Britânica', '1965-07-31'),
('George Orwell', 'Britânica', '1903-06-25'),
('Clarice Lispector', 'Brasileira', '1920-12-10'),
('J.R.R. Tolkien', 'Britânica', '1892-01-03');

-- 2. TABELA DE LIVROS --
CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    ano_publicacao YEAR,
    numero_paginas INT,
    sinopse TEXT
);

INSERT INTO livros (titulo, isbn, ano_publicacao, numero_paginas, sinopse) VALUES
('Dom Casmurro', '9788535914849', 1899, 256, 'Romance que acompanha as memórias de Bentinho e sua relação com Capitu.'),
('Harry Potter e a Pedra Filosofal', '9788532530783', 1997, 264, 'Um jovem descobre que é um bruxo e começa seus estudos em Hogwarts.'),
('1984', '9788535914848', 1949, 416, 'Uma sociedade controlada por um governo totalitário é observada pelo personagem Winston Smith.'),
('A Hora da Estrela', '9788532508126', 1977, 88, 'A história de Macabéa, uma jovem nordestina que vive no Rio de Janeiro.'),
('O Senhor dos Anéis', '9788595084759', 1954, 1216, 'Uma grande jornada para destruir um poderoso anel e impedir o avanço do mal.');

-- 3. TABELA DE GENEROS --
CREATE TABLE generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL
);

INSERT INTO generos (nome) VALUES
('Romance'),
('Fantasia'),
('Ficção Científica'),
('Literatura Brasileira'),
('Aventura');

-- 4. TABELA DE USUARIOS --
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(150) NOT NULL,
    cpf VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    telefone VARCHAR(20) UNIQUE,
    data_nascimento DATE
);

INSERT INTO usuarios (nome_completo, cpf, email, telefone, data_nascimento) VALUES
('Deryck Ersching', '111.111.111-11', 'deryck@email.com', '47999990001', '2007-03-10'),
('Ana Souza', '222.222.222-22', 'ana@email.com', '47999990002', '2005-07-15'),
('Carlos Oliveira', '333.333.333-33', 'carlos@email.com', '47999990003', '2004-11-20'),
('Mariana Santos', '444.444.444-44', 'mariana@email.com', '47999990004', '2006-02-08'),
('João Pereira', '555.555.555-55', 'joao@email.com', '47999990005', '2003-09-25');

-- 5. RELACIONAMENTO AUTORES x LIVROS --
CREATE TABLE autores_has_livros (
    autores_id INT,
    livros_id INT,

    PRIMARY KEY (autores_id, livros_id),

    FOREIGN KEY (autores_id) REFERENCES autores(id),
    FOREIGN KEY (livros_id) REFERENCES livros(id)
);

INSERT INTO autores_has_livros (autores_id, livros_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- 6. RELACIONAMENTO LIVROS x GENEROS --
CREATE TABLE livros_generos (
    livros_id INT,
    generos_id INT,

    PRIMARY KEY (livros_id, generos_id),
    FOREIGN KEY (livros_id) REFERENCES livros(id),
    FOREIGN KEY (generos_id) REFERENCES generos(id)
);

INSERT INTO livros_generos (livros_id, generos_id) VALUES
(1, 1),
(1, 4),
(2, 2),
(2, 5),
(3, 3),
(4, 1),
(4, 4),
(5, 2),
(5, 5);

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

INSERT INTO emprestimos (data_emprestimo, data_devolucao, usuarios_id, livros_id) VALUES
('2026-09-01', '2026-09-15', 1, 1),
('2026-09-05', '2026-09-19', 2, 2),
('2026-09-10', NULL, 3, 3),
('2026-09-12', '2026-09-20', 4, 4),
('2026-09-15', NULL, 5, 5);