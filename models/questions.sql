DROP TABLE IF EXISTS questions;

CREATE TABLE questions(
    id SERIAL PRIMARY KEY,  
    questions VARCHAR(500) NOT NULL UNIQUE,
    quizid INT,
    CONSTRAINT fk_question_to_quiz FOREIGN KEY (quizid) REFERENCES quizzes(id)
);


INSERT INTO questions (id, questions, quizid)
VALUES 
  (1, 'What number commonly represents Pi?', 1),
  (2, 'How do you calculate Return on Investment (ROI)?', 1),
  (3, 'Calculate: 8 ÷ 2 ( 2 + 2 ).', 1),
  (4, 'When did Tim Berners-Lee create the World Wide web?', 2),
  (5, 'Who is considered to be the first computer programmer?', 2),
  (6, 'What year was JavaScript invented?', 2),
  (7, 'What is the modulo operator?', 3),
  (8, 'What is the value of z? var z = "Hello" + 3;', 3),
  (9, 'In Big O notation, what is 0(n)?', 3);

SELECT setval('questions_id_seq', (SELECT max(id) FROM questions));