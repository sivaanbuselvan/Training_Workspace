CREATE PROCEDURE select_all 
AS 
SELECT * FROM employeetable
GO;

CREATE PROCEDURE selectAllName 
    @Ename varchar(30)
AS
BEGIN
    SELECT * 
    FROM employeetable 
    WHERE Ename = @Ename;
END;
 

 EXEC selectAllName @Ename = 'Raja';

 SELECT * FROM employeetable;
 SELECT 
  DATENAME(m,doj)
  FROM employeetable
  WHERE ename='Raja';
  --This stored procedure is used to insert into the data to the table
  
 CREATE PROCEDURE insert_into
 @ename VARCHAR(50),
 @eid INT,
 @date_of_join DATE,
 @salary DECIMAL,
 @department VARCHAR(20) 
 AS
 BEGIN
 BEGIN TRAN
  INSERT INTO employeetable
  values(@ename, @eid, @date_of_join, @salary,@department)
 COMMIT END 
 END
 -- This line is used to execute the stored procedure

 EXEC insert_into @ename='senthil', @eid =5,@date_of_join='2012-08-26',@salary=90000,@department='support';
 
   SELECT * FROM employeetable;
   SELECT * FROM Department;


 -- by using the join cocnept reteieve the department id and employeecount
 SELECT DepartmentId  Did , EmployeeCount 
 FROM   Department D join employeetable E
 ON D.DepartmentName = E.department
 WHERE E.Ename = 'Raja';

 -- This query is used to update the a unique record from the table
 UPDATE employeetable SET department ='SUPPORT'  WHERE eid =5;

 -- this query is used to select the second max in a table
 
 SELECT max(salary)
 FROM employeetable 
 WHERE salary < 
 (SELECT max(salary) 
 FROM employeetable);

 -- this query is used to select the top 2 records from the table;
 
 SELECT TOP 2 * 
 FROM department;

 -- Using the group by clause we get the count of employee 
 SELECT count(Ename) AS count,department
 FROM employeetable
 GROUP BY (department) ;
 

 SELECT * FROM employeetable;

 exec sp_RENAME'employeetable.department','employee_department','COLUMN';