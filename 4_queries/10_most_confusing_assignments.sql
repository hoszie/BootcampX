SELECT assignments.id,
       assignments.name,
       assignments.day,
       assignments.chapter,
       COUNT(assistance_requests.id) AS total_requests

FROM assignments
    JOIN assistance_requests ON assignments.id = assistance_requests.assignment_id

GROUP BY (assignments.id)
ORDER BY COUNT(assistance_requests.id) DESC;

