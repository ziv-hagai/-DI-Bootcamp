SELECT COUNT(*) from actors;

INSERT INTO actors (first_name, date_birth)
VALUES('Ziv','1965-10-08');

-- ERROR:  null value in column "last_name" of relation "actors" violates not-null constraint
-- DETAIL:  Failing row contains (5, Ziv, null, 1965-10-08, 0).
-- SQL state: 23502