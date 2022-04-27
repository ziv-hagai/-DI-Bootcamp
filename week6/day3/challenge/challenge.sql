--PART 1
--1
CREATE TABLE customer (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255), 
	last_name VARCHAR(255) NOT NULL
);

CREATE TABLE customer_profile (
	id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false, 
	customer_id SMALLINT UNIQUE REFERENCES customer (id) 
)

--2
INSERT INTO customer (first_name, last_name)
VALUES
	('ziv','hagai'),
	('johnny','j');
	
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES
	(true, (SELECT id FROM customer WHERE first_name='ziv' AND last_name='hagai')),
	(false,(SELECT id FROM customer WHERE first_name='johnny' AND last_name='j'));

--3
SELECT first_name FROM customer
JOIN customer_profile ON customer.id=customer_profile.customer_id
WHERE isLoggedIn;

SELECT first_name FROM customer
FULL JOIN customer_profile ON customer.id=customer_profile.customer_id

SELECT COUNT(first_name) FROM customer
JOIN customer_profile ON customer.id=customer_profile.customer_id
WHERE NOT isLoggedIn

--PART 2
--1
CREATE TABLE book (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL, 
	author VARCHAR(255) NOT NULL
)

--2
INSERT INTO book (title,author)
VALUES
	('Alice In Wonderland', 'Lewis Carroll'),
	('Harry Potter', 'J.K Rowling'),
	('To kill a mockingbird', 'Harper Lee')

--3
CREATE TABLE student (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL UNIQUE, 
	age smallint CHECK (age <= 15)
)

--4
INSERT INTO student (name, age)
VALUES
	('John', 12),
	('Lera', 11),
	('Patrick', 10),
	('Bob', 14)
	
--5
CREATE TABLE library (
	book_id SMALLINT REFERENCES book (id) ON DELETE CASCADE ON UPDATE CASCADE, 
	student_id SMALLINT REFERENCES student (id) ON DELETE CASCADE ON UPDATE CASCADE , 
	borrowed_date DATE
	PRIMARY KEY(book_id,student_id)
)

--6
INSERT INTO library (book_id, student_id, borrowed_date)
VALUES
((SELECT id FROM book WHERE title='Alice In Wonderland'),(SELECT id FROM student WHERE name='John'), '15/02/2022'),
((SELECT id FROM book WHERE title='To kill a mockingbird'),(SELECT id FROM student WHERE name='Bob'), '03/03/2021'),
((SELECT id FROM book WHERE title='Alice In Wonderland'),(SELECT id FROM student WHERE name='Lera'), '23/05/2021'),
((SELECT id FROM book WHERE title='Harry Potter'),(SELECT id FROM student WHERE name='Bob'), '12/08/2021')

--7
SELECT * FROM library

SELECT name, title, borrowed_date FROM library
JOIN student ON student.id=library.student_id
JOIN book ON book.id=library.book_id

SELECT avg(age) FROM student
JOIN library ON student.id=library.student_id
JOIN book ON book.id=library.book_id
WHERE title = 'Alice In Wonderland'

DELETE FROM student WHERE name='Bob' 
--Bob's borrows was also deleted

