-- funções de agregação
SELECT rental_duration, title FROM sakila.film;

SELECT AVG(rental_duration) FROM sakila.film;
SELECT MIN(rental_duration) FROM sakila.film;
SELECT MAX(rental_duration) FROM sakila.film;
SELECT SUM(rental_duration) FROM sakila.film;
SELECT COUNT(rental_duration) FROM sakila.film;

-- agrupamento por diretor e agregação com COUNT

SELECT * FROM Pixar.Movies;

-- agp só 1
SELECT COUNT(title), director FROM Pixar.Movies WHERE director = 'John Lasseter';
-- agp todos
SELECT COUNT(title), director FROM Pixar.Movies GROUP BY director;

-- outras funções de agregação com GROUPY BY
-- se quero ter uma visualização por baixo dos panos uso GROUP_CONCAT

SELECT title, length_minutes FROM Pixar.Movies;

SELECT 
	GROUP_CONCAT(title) as filmes,
    COUNT(title) as quantidade_filmes,
    director,
    SUM(length_minutes) as duracao_filmes,
    ROUND(AVG(length_minutes), 1) as media_duracao,
    MAX(length_minutes) as maior_duracao,
    MIN(length_minutes) as menor_duracao
FROM
    Pixar.Movies
GROUP BY director;

--

SELECT email, store_id FROM sakila.customer;

SELECT 
	COUNT(email) as qtd_email_cadastrados,
    store_id
FROM
	sakila.customer
GROUP BY store_id;

-- 

SELECT title, rating, rental_rate FROM sakila.film;

SELECT COUNT(rental_duration) FROM sakila.film;

-- quero saber quantas vezes teve o rating PG
SELECT COUNT(rental_rate), rating FROM sakila.film WHERE rating = 'PG';

SELECT
	AVG(rental_rate) as 'media', rating
FROM 
	sakila.film
GROUP BY rating;

--

SELECT 
	MIN(rental_rate),
    rating
FROM
	sakila.film
GROUP BY rating;

-- 

SELECT
	MAX(rental_rate),
    rating
FROM sakila.film
GROUP BY rating;

-- 

SELECT
	SUM(rental_rate),
    rating
FROM sakila.film
GROUP BY rating;

-- utilização do having para filtrar (o having é para grupos, o where é único)

SELECT * FROM sakila.address;

SELECT district, COUNT(*) as district_count
FROM sakila.address
GROUP BY district
HAVING COUNT(*) >= 2;

-- comandos condicionais: IF

SET @age = 14;
SELECT IF (@age < 18, 'Minor of age', 'Not minor of age');

-- 

SET @is_entrance_allowed = true;
SELECT 
    IF(@is_entrance_allowed = 1,
        'Entrance allowed',
        'Entrance not allowed') AS permission;
        
-- comandos condicionais: CASE

SELECT 
	title, release_year, length,
    CASE
		WHEN length <= 60 THEN 'Short duration'
        WHEN length > 60 AND length <= 150 THEN 'Medium duration'
		ELSE 'Long duration'
	END AS 'film_duration_type'
FROM 
    sakila.film;
    
-- funções para manipulação de string

SELECT LENGTH('Curso BeTrybe');

SELECT UCASE('Curso BeTrybe');

SELECT LCASE('Curso BeTrybe');

SELECT REPLACE('Curso BeTrybe', 'e', 'eeee');

-- extrai 5 caracteres a partir da esquerda
SELECT LEFT('Curso BeTrybe', 5);

-- extrai 5 caracteres a partir da direita
SELECT RIGHT('Curso BeTrybe', 5);

-- EXTRAI parte de uma string, começando na posição 6
SELECT SUBSTRING('Curso BeTrybe', 6);

-- EXTRAI 4 caracteres de uma string, começando na posição 2
SELECT SUBSTRING('Curso BeTrybe', 2, 4); 

-- extrai 6 caracteres de uma string, começando na posição 5, da direita para a esquerda
SELECT SUBSTRING('Curso BeTrybe', -5, 6); 

-- Funções aritméticas
SELECT 5 + 5; 
SELECT 5 - 2; 
SELECT 5 * 2;
SELECT 5 / 3;  

-- divisão inteira
SELECT 20 DIV 3; 

-- retornar o resto da divisão
SELECT 18 MOD 3; 

-- arredondamento
SELECT ROUND(20.49); 

-- arredonda para o inteiro mais próximo para cima
SELECT CEIL(20.51);

-- arredonda para o inteiro mais próximo para baixo
SELECT FLOOR(10.51); 

-- potenciação
SELECT POW(2, 5); 

-- raiz quadrada
SELECT SQRT(16); 

-- gerar valores aleatórios entre 0 (incluso) e 1.0 (excluso)
SELECT RAND();

-- gerar valor aleatório entre 5 e 14
SELECT FLOOR(5 + (RAND() * 10));

SELECT CURRENT_DATE(); -- yyyy-mm-dd Atual
SELECT NOW(); -- yyyy-mm-dd hh-mm-ss Atual

-- diferença em dias
SELECT DATEDIFF('2020-05-31', '2020-05-01');

-- diferença de tempo 
SELECT TIMEDIFF('05:15:30', '06:15:30');
SELECT TIMEDIFF('05:15:30', '05:12:30');