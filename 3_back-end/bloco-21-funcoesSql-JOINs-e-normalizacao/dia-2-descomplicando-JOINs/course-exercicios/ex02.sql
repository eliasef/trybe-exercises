-- 🚀:rocket: Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais
-- (international_sales) do que vendas nacionais (domestic_sales).

SELECT * FROM pixar.movies;
SELECT * FROM pixar.box_office;

SELECT
	mo.title AS movie,
    bo.international_sales,
    bo.domestic_sales
FROM
	pixar.movies AS mo
    INNER JOIN pixar.box_office AS bo
    ON mo.id = bo.movie_id
WHERE
	bo.international_sales > bo.domestic_sales;