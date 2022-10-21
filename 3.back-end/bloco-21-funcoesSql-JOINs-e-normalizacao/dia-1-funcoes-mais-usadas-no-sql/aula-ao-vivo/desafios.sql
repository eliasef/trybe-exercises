-- 1. Retorne o id de customer e a média de dias que uma pessoa usuária permanece com o produto alugado (tabela rental);

-- 2. Retorne o tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating (tabela film);

-- 3. Quantas pessoas usuárias temos por cidade (tabela address);

-- 4. Qual o valor total (amount) recebido dentro de cada mês (tabela payment)?

-- 5. Retorne a quantidade de itens alugados pelo preço (amount) que sejam menores ou iguais a 1.99 (tabela payment)

-- 6. Qual valor arrecadado (soma) por valor de produto que tem mais saída por mês e ano? (tabela payment)

SELECT * FROM sakila.rental;

-- 1 como fazer media de data com date-time

SELECT (AVG(rental_date) AS 'media' FROM sakila.rental GROUP BY rental_id;

-- 2 

SELECT * FROM sakila.film;

SELECT GROUP_CONCAT(title) AS 'films',
		MAX(length) AS 'max_minutes',
		MIN(length) AS 'min_minutes',
		ROUND(AVG(length), 1) AS 'med_minutes',
        rating
FROM sakila.film
GROUP BY rating;

-- 3 ONDE TENHO A INFORMAÇÃO DE PESSOAS USUARIAS na tabela adress?

SELECT * FROM sakila.address;

SELECT COUNT(district) AS 'cities',

-- 4