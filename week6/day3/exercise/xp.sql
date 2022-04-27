--exercise1
--1
SELECT DISTINCT language_id FROM language 

--2
select title, description,name from film full join language on film.language_id=language.language_id 

--3
CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255)
)

INSERT INTO new_film (name)
VALUES
	('sonic2'),
	('sonic3'),
	('sonic4');
	
--4
CREATE TABLE customer_review (
	review_id serial primary key not null,
	film_id smallint references new_film(id) ON DELETE CASCADE,
	language_id smallint references language(language_id),
	title VARCHAR(255),
	score smallint CHECK (score BETWEEN 1 and 10),
	review_text TEXT,
	last_update DATE
	)
	
--5
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES
	((SELECT id FROM new_film WHERE name='sonic2'), (SELECT language_id FROM language WHERE name='English'), 'bad', 2,'dont watch it','2022-04-26'),	
	((SELECT id FROM new_film WHERE name='sonic3'), (SELECT language_id FROM language WHERE name='English'), 'very bad', 1,'dont ever watch it','2022-04-26');	

--6
DELETE FROM new_film WHERE name='sonic3'
--THE REVIEW WAS ALSO DELETED


--EXERCISE2
--1
UPDATE film SET language_id=2 WHERE film_id = 1 OR film_id = 3

--2
-- FK: ADDRESS_ID FROM ADDRESS TABLE, SO YOU CANNOT DELETE AN ADDRESS A CUSTOMER IS RELATED TO.

--3
DROP TABLE customer_review
--EASY

--4
SELECT COUNT(*) FROM rental WHERE return_date is null
--183

--5
SELECT title FROM film 
JOIN inventory ON film.film_id=inventory.film_id
JOIN rental ON rental.inventory_id=inventory.inventory_id
WHERE rental.return_date is null 
ORDER BY film.rental_rate DESC LIMIT 30

--6
SELECT title FROM film 
JOIN film_actor ON film.film_id=film_actor.film_id 
JOIN actor ON film_actor.actor_id=actor.actor_id 
WHERE actor.last_name='Monroe' 
AND actor.first_name='Penelope'
AND film.description ILIKE '%sumo wrestler%'

SELECT title FROM film WHERE rating='R' AND length < 60 
AND film_id IN (SELECT film_id FROM film_category WHERE category_id=(SELECT category_id FROM category WHERE name='Documentary'));

SELECT title from film WHERE film_id = (SELECT film_id FROM inventory WHERE inventory_id=(SELECT inventory_id FROM rental WHERE rental_id IN
(SELECT rental_id FROM payment WHERE amount > 4.0 AND customer_id=(SELECT customer_id FROM customer WHERE first_name='Matthew' AND last_name='Mahan'))
AND return_date BETWEEN '2005-07-28' AND '2005-08-01'));

SELECT title FROM film 
JOIN inventory ON inventory.film_id=film.film_id 
JOIN rental ON rental.inventory_id=inventory.inventory_id
JOIN customer ON customer.customer_id=rental.customer_id
WHERE title ILIKE '%boat%' OR 
description ILIKE '%boat%' AND
customer.first_name='Matthew' AND
customer.last_name='Mahan'
ORDER BY replacement_cost DESC LIMIT 1
