-- 1. Retorne o id de customer e a média de dias que uma pessoa usuária permanece com o produto alugado (tabela rental);

-- 2. Retorne o tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating (tabela film);

-- 3. Quantas pessoas usuárias temos por cidade (tabela address);

-- 4. Qual o valor total (amount) recebido dentro de cada mês (tabela payment)?

-- 5. Retorne a quantidade de itens alugados pelo preço (amount) que sejam menores ou iguais a 1.99 (tabela payment)

-- 6. Qual valor arrecadado (soma) por valor de produto que tem mais saída por mês e ano? (tabela payment)

-- GABARITO:

-- 1 Retorne o id de customer e a média de dias que uma pessoa usuária permanece com o produto alugado;

SELECT * FROM sakila.rental;

SELECT
	customer_id,
	AVG(DATEDIFF(return_date, rental_date)) AS 'media_dias_alugado'
FROM sakila.rental
GROUP BY customer_id;

-- 2 Retorne o tempo máximo, mínimo e a média de tempo dos filmes lançados em 2006 por rating;

SELECT * FROM sakila.film;

SELECT 
    GROUP_CONCAT(title) AS 'films',
    MAX(length) AS 'max_minutes',
    MIN(length) AS 'min_minutes',
    ROUND(AVG(length), 1) AS 'med_minutes',
    rating,
    release_year
FROM
    sakila.film
WHERE
	release_year = 2006
GROUP BY rating;

-- 3 Quantas pessoas usuárias temos por cidade;

SELECT * FROM sakila.address;

SELECT
	COUNT(*) AS 'qntd_pessoas',
    city_id
FROM 
	sakila.address
GROUP BY
	city_id;
    
-- dúvida: COUNT(*) significa contar quantas pessoas temos por cidade ?

-- 4 Qual o valor total (amount) recebido dentro de cada mês

SELECT
	SUM(amount) AS valor_total,
    YEAR(payment_date) AS ano_pagamento,
	MONTH(payment_date) AS mes_pagamento
FROM
	sakila.payment
GROUP BY YEAR(payment_date),MONTH(payment_date);

-- 5 Retorne a quantidade de itens alugados pelo preço (amount) que 
-- sejam menores ou iguais a 1.99

SELECT
    amount AS valor,
    COUNT(amount) AS quantidade_valor_aparece
FROM
    sakila.payment
GROUP BY amount
HAVING amount <= 1.99;

-- 6 Qual valor arrecadado (soma) por valor de produto que tem mais saída 
-- por mês e ano?
    
SELECT 
    amount,
    SUM(amount) AS total_amount,
    YEAR(payment_date) AS year_payment,
    MONTH(payment_date) AS month_payment
FROM
    sakila.payment
GROUP BY amount , YEAR(payment_date) , MONTH(payment_date)
ORDER BY total_amount DESC;