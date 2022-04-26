--1
SELECT * FROM CUSTOMER

--2
SELECT CONCAT(first_name, ' ',last_name) AS full_name FROM CUSTOMER 

--3
SELECT DISTINCT create_date FROM CUSTOMER

--4
SELECT * FROM CUSTOMER ORDER BY first_name DESC

--5
SELECT film_id, title, description, release_year, rental_rate
FROM film ORDER BY rental_rate

--6
SELECT address, phone FROM address WHERE district = 'Texas'


--7
SELECT * FROM film WHERE film_id = 15 OR film_id = 150

--8
SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Pulp Fiction'

--9
SELECT film_id, title, description, length, rental_rate FROM film WHERE title  ILIKE 'Pu%'

--10
SELECT * FROM film ORDER BY rental_rate LIMIT 10 

--11
SELECT * FROM film ORDER BY rental_rate OFFSET 10 LIMIT 10 

--12
SELECT amount,payment_date, payment.customer_id, first_name, last_name FROM payment
INNER JOIN customer ON payment.customer_id=customer.customer_id ORDER BY customer_id
-- Write a query which will join the data in the customer table and the payment table. 
-- You want to get the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).

--13
SELECT * FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory)

--14
SELECT city,country,city.country_id FROM city INNER JOIN country ON city.country_id = country.country_id
