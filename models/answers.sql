DROP TABLE IF EXISTS answers;

CREATE TABLE answers(
    id SERIAL PRIMARY KEY,  
    answer VARCHAR(500) NOT NULL,
    correct bool,
    questionid INT,
    CONSTRAINT fk_answers_to_question FOREIGN KEY (questionid) REFERENCES questions(id)
);

INSERT INTO answers (id, answer, correct, questionid)
VALUES 
  (1, '3.14', true, 1),
  (2, '2.56', false, 1),
  (3, '2.14', false, 1),
  (4, '3.16', false, 1),
  (5, 'SUM of gross profit * 12 ', false, 2),
  (6, 'SUM of gross profit - net profit / costs', false, 2),
  (7, 'SUM of net profit - losses', false, 2),
  (8, 'SUM of income - SUM of costs / SUM of costs x 100% ', true, 2),
  (9, '8', false, 3),
  (10, '44', false, 3),
  (11, '16', true, 3),
  (12, '0', false, 3),
  (13, '1991', false, 4),
  (14, '1989', true, 4),
  (15, '1979', false, 4),
  (16, '1995', false, 4),
  (17, 'Ada Lovelace', true, 5),
  (18, 'Charles Babbage', false, 5),
  (19, 'Bill Gates', false, 5),
  (20, 'Issac Newton', false, 5),
  (21, '1985', false, 6),
  (22, '2000', false, 6),
  (23, '1999', false, 6),
  (24, '1995', true, 6),
  (25, '//', false, 7),
  (26, '%', true, 7),
  (27, '>=', false, 7),
  (28, '!=', false, 7),
  (29, 'HelloHelloHello', false, 8),
  (30, 'Hello3', true, 8),
  (31, 'Hello + 3', false, 8),
  (32, 'Hello', false, 8),
  (33, 'Quadratic Time', false, 9),
  (34, 'Logarithmic Time', false, 9),
  (35, 'Constant Time', false, 9),
  (36, 'Linear Time', true, 9);

SELECT setval('answers_id_seq', (SELECT max(id) FROM answers)); 