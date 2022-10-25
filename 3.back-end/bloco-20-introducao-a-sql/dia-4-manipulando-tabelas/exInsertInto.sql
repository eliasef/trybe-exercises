-- 8 - Faça uma consulta que retorne três colunas, respectivamente, com os nomes 'A', 'Trybe' e 'eh', 
-- e com valores referentes a soma de '5 + 6', a string 'de', a soma de '2 + 8'.

-- INSERT INTO
-- 	northwind.products(
-- 	id AS 'A',
--     product_name AS 'Trybe',
--     product_code AS 'eh'
--     )
-- FROM
-- 	northwind.products;
    
SELECT * FROM northwind.products;

INSERT INTO northwind.products (id, product_name, product_code) VALUES (5 + 6, 'de', 2+ 8);

SELECT
	id AS 'A',
    product_name AS 'Trybe',
    product_code AS 'eh'
FROM
	northwind.products
WHERE
	id = 11;


