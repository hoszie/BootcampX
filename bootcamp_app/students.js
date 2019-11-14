const { Pool } = require('pg');
const process = require('process');


const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
console.log(process.argv);
////////////////////////////////////////////////////
const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
pool.query(`
SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`,[`%${cohortName}%`, limit] )
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`)
  })
})
.catch(err => console.log('query error', err.stack));
///////////////////////////////////////////////////
// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5
// `)
// .then(res => {
//   // console.log(res.rows);
// })
// .catch(err => console.error('query error', err.stack))
// ////////////////////////////////////////////////////
// pool.query(`
// SELECT students.id, students.name, cohorts.name AS cohortName
// FROM students
//   JOIN cohorts ON students.cohort_id = cohorts.id
// LIMIT 2;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     // console.log(user);
//     // console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohortname} cohort`);
//   })
// })
// .catch(err => console.error('query error', err.stack));



// '%${process.argv[2]}%'
// ${process.argv[3] || 2};