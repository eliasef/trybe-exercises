-- selecionar os países que começam com B

SELECT * FROM sakila.country;

SELECT
	country_id,
    country
FROM
	sakila.country
LIMIT 7 OFFSET 10;

-- contar quantas linhas tem na tabela address

SELECT 
    COUNT(*)
FROM
    sakila.address;
    
-- contar quantos address_id tem e quantos distritos distintos tem

SELECT
	COUNT(address_id) AS address_id,
    COUNT(DISTINCT district) AS amount_district
FROM
	sakila.address;
    
-- quantidade de endereços que o distrito = California

SELECT * FROM sakila.address;

SELECT
	COUNT(address) AS amount_calif_dist
FROM 
	sakila.address
WHERE
	district = 'California';
    
-- quantidade de endereços de cada distrito

SELECT 
	COUNT(address) AS amount_address,
    district
FROM
	sakila.address
GROUP BY
	district;
    