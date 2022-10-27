-- Quantos filmes de cada diretor tiveram maior bilheteria?
SELECT 
	COUNT(mo.title) AS numero_filmes,
    mo.director,
    SUM(bo.domestic_sales + bo.international_sales) AS total_sales
FROM
	pixar.movies AS mo
	INNER JOIN pixar.box_office AS bo
    ON mo.id = bo.movie_id
GROUP BY mo.director
ORDER BY total_sales DESC;


