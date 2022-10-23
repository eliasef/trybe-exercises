-- insert na tabela actor
INSERT INTO sakila.actor (first_name, last_name) VALUES ('Tatiana', 'Alencar');

-- exibir última pessoa inserida
SELECT * FROM sakila.actor ORDER BY actor_id DESC LIMIT 1;

-- indicar id único no insert
INSERT INTO sakila.actor (actor_id, first_name, last_name) VALUES (202, 'Tatiana', 'Alencar');
--
INSERT INTO sakila.actor (actor_id, first_name, last_name) VALUES (300, 'Leonardo', 'DiCaprio');

-- insert sem indicar id (auto_increment)
INSERT INTO sakila.actor (first_name, last_name) VALUES ('Russell', 'Crowe');

-- insert em id anteriores existentes
INSERT INTO sakila.actor (actor_id, first_name, last_name) VALUES (204, 'Sandra', 'Bullock');

-- insert de múltiplos valores
INSERT INTO sakila.actor (first_name, last_name) 
VALUES ('Tom', 'Hanks'), ('Meryl', 'Streep');

-- insert com IGNORE
INSERT IGNORE INTO sakila.actor (actor_id, first_name, last_name) 
VALUES 
	(303, 'Tom', 'Hanks'),
     (401, 'Meryl', 'Streep'),
	(401, 'Robbin', null),
	(null, 'Cameron', 'Diaz');

-- insert em uma tabela com dados provenientes de outra tabela
INSERT INTO sakila.actor (first_name, last_name) 
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

-- update da tabela customer
UPDATE sakila.customer 
SET email = 'c.terry@sakilacustomer.org'
WHERE first_name = 'TERRY';
--
UPDATE sakila.customer 
SET email = 'c.terry@sakilacustomer.org'
WHERE customer_id = 253;
-- 
UPDATE sakila.customer 
SET email = 'c.terry@sakilacustomer.org'
WHERE first_name = 'TERRY' AND last_name = 'CARLSON';

-- atualizar vários registros ao mesmo tempo
UPDATE sakila.film
SET rental_rate = rental_rate * 0.7 
WHERE film_id IN (609, 612, 622, 626, 650, 653);

-- update com order by e limit 
UPDATE sakila.film
SET rental_duration = rental_duration + 1
ORDER BY rental_duration DESC
LIMIT 15;

-- exclusão lógica / update
UPDATE sakila.customer
SET active = 0
WHERE customer_id = 1;

-- delete da tabela film_text
DELETE FROM sakila.film_text 
WHERE film_id = 12;

-- delete da tabela rental que reflete na tabela payment
DELETE FROM sakila.rental WHERE rental_id = 76; 

-- truncate da tabela payment
TRUNCATE sakila.payment;
