DROP TABLE IF EXISTS quizzes;

CREATE TABLE quizzes (id SERIAL PRIMARY KEY, name VARCHAR(255));

INSERT INTO quizzes (id, name)
VALUES
  (1, 'Maths'),
  (2, 'History'),
  (3, 'Computer Science');

SELECT setval('quizes_id_seq', (SELECT max(id) FROM quizes));