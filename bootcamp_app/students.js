const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

 const cohort = process.argv[2];
 const numStudents = process.argv[3] || 5;

pool.query("SELECT students.id, students.name as student, cohorts.name as cohort FROM students JOIN cohorts on cohorts.id = cohort_id WHERE cohorts.name LIKE $1 LIMIT $2;",[`%${cohort}%`, numStudents])
.then(res => {
  for (let i = 0; i < res.rows.length; i++){{
    console.log(`${res.rows[i].student} has an id of ${res.rows[i].id} and was in the ${res.rows[i].cohort} cohort`);

  }}
})
.catch(err => console.error('query error', err.stack));