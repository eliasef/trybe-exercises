-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, 
-- os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT * FROM pixar.movies;
SELECT * FROM pixar.theater;

SELECT
	th.name AS cine,
    th.location,
	mo.title AS movie,
    mo.director,
    mo.year,
    mo.length_minutes
FROM
	pixar.theater AS th
LEFT JOIN pixar.movies AS mo
    ON mo.theater_id = th.id
ORDER BY
	th.name ASC;
    
-- LEFT: tem 1 null e um dado
-- RIGHT: ambos são nulls