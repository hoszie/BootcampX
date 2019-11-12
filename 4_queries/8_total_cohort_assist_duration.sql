SELECT cohorts.name,
       SUM(completed_at - started_at) AS total_duration

FROM cohorts
    JOIN students ON cohorts.id = cohort_id
    JOIN assistance_requests ON students.id = student_id

GROUP BY cohorts.name
ORDER BY SUM(completed_at - started_at);