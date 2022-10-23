-- selecionando com LIKE

SELECT 
	* 
FROM 
	sakila.customer
WHERE
	first_name LIKE '%FER';
    
-- nomes que iniciam com J e terminam com E

SELECT 
	*
FROM 
	sakila.customer
WHERE
	first_name LIKE 'J%E';
    