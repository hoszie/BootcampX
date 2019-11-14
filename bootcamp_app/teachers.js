const { Pool } = require('pg');
const process = require('process')

const pool = new Pool ({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT teachers.name AS teacher,
       cohorts.name AS cohort,
       COUNT(assistance_requests.id) AS total

FROM assistance_requests
    JOIN teachers ON teachers.id = teacher_id
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = cohort_id

WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name

`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`)
  })
})
.catch(err => console.log('query error', err.stack));