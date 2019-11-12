SELECT teachers.name AS teacher,
       cohorts.name AS cohort,
       COUNT(assistance_requests.id) AS total

FROM assistance_requests
    JOIN teachers ON teachers.id = teacher_id
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = cohort_id

WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;