-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais 
-- (domestic_sales) e internacionais (international_sales) de cada filme!

SELECT * FROM pixar.movies;
SELECT * FROM pixar.box_office;

SELECT
	mo.title,
	bo.domestic_sales,
	bo.international_sales
FROM 
	pixar.movies AS mo,
    INNER JOIN pixar.box_office AS bo 
    ON mo.id = bo.movie_id;
    

