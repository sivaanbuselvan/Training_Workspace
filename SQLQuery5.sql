 
 -- This query is used to fetch data from 2 different table simultaneously using join condition
 select EmployeeCount from Department join employeetable
   on Department.DepartmentName=employeetable.department
 where employeetable.ename='Raja'; 

