 -- Query to find the second max in the given set of datas using sub query 
select * from Department where employeeCount = (SELECT MAX(EmployeeCount)
FROM Department
WHERE EmployeeCount < (SELECT MAX(EmployeeCount) FROM Department));
 

 -- Query to find the second max in the given set of datas using order by function
 select * from Department  order by EmployeeCount DESC offset 1 rows fetch next 1 row only;
