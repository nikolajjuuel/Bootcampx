SELECT assignments.id, assignments.name, assignments.day, assignments.chapter, COUNT(assignment_id) as total_requests
FROM assignments
JOIN assistance_requests on assistance_requests.assignment_id = assignments.id 
GROUP BY assignments.id
ORDER BY total_requests DESC;