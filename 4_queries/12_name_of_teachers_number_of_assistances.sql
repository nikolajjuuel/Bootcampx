SELECT teachers.name, cohorts.name, COUNT(teachers.name)
FROM assistance_requests

JOIN students ON students.id = student_id
JOIN teachers ON teachers.id = teacher_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'JUL02'

GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;