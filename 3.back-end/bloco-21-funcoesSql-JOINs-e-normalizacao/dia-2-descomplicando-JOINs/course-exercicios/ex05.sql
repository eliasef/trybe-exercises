-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas
-- que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT * FROM pixar.theater;
SELECT * FROM pixar.movies;

SELECT
	th.name AS cine,
    th.location,
    mo.title AS movie,
    mo.director,
    mo.year,
    mo.length_minutes
FROM
	pixar.theater AS th
RIGHT JOIN pixar.movies AS mo ON th.id = mo.theater_id
ORDER BY
	th.name ASC;
    
-- LEFT: tem 1 null e um dado
-- RIGHT: ambos são nulls