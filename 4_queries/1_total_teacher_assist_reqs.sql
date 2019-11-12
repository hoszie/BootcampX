SELECT COUNT(assistance_requests.id), teachers.name
FROM teachers JOIN assistance_requests ON teacher_id = teachers.id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;