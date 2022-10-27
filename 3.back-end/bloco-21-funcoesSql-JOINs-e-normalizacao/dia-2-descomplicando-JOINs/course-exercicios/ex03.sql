-- :rocket: Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT * FROM pixar.movies;
SELECT * FROM pixar.box_office;

SELECT
	mo.title AS movie,
    bo.rating
FROM
	pixar.movies AS mo
    INNER JOIN pixar.box_office AS bo
	ON mo.id = bo.movie_id
ORDER BY
	bo.rating DESC;
