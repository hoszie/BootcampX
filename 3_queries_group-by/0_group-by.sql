SELECT COUNT(assignment_submissions.*) AS total_submissions
FROM assignment_submissions;

SELECT students.name AS student, COUNT(assignment_submissions.*) AS total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name;

SELECT students.name AS student, COUNT(assignment_submissions.*) AS total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING COUNT(assignment_submissions.*) < 100;



-- GROUP BY allows us to combine the results based on a column so an aggregate can be applied to each group.
-- HAVING allows us to filter our results based on the result of an aggregate function.