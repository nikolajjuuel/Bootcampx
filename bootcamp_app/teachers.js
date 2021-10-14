const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv[2];

pool.query(`SELECT DISTINCT(teachers.name) as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN teachers ON teachers.id = teacher_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name`, [`%${cohort}%`])
.then(res => {
  for (let i = 1; i < res.rows.length; i++){
    console.log(`${res.rows[i].cohort}: ${res.rows[i].teacher}`);
}

})
.catch(err => console.error('query error', err.stack));
