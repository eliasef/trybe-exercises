-- Banco de dados da W3Schools (https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all)

-- encontrar pares de clientes que moram em países diferentes

SELECT 
    C1.CustomerName AS Pessoa1,
    C2.CustomerName AS Pessoa2,
    C1.Country AS Country1,
    C2.Country AS Country2
FROM
    Customers C1,
    Customers C2
WHERE
    C1.Country <> C2.Country;