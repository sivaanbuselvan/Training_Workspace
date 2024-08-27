

create table login(loginid INT PRIMARY KEY ,username varchar(50) not null,password varchar(15) not null);

INSERT INTO login
VALUES (003,'ROY','JASON@2314');

SELECT * FROM LOGIN;
-- This query is used to rename the column name of the given table
exec sp_RENAME'login.username','user_name','COLUMN';

-- This stored procedure is used to update the password
CREATE PROCEDURE Update_Log
    @loginid INT, 
    @Password VARCHAR(15)
AS 
BEGIN
    UPDATE LOGIN 
    SET Password = @Password
    WHERE loginid = @loginid;
END;

EXEC Update_log @loginid=3,@Password = 'Jason@2314';

create table SignUp
(loginid INT PRIMARY KEY ,
Username varchar(50) NOT NULL,
Password varchar(15) NOT NULL,
conformPassword varchar(15) not null,
first_name VARCHAR(30) NOT NULL,
Last_name VARCHAR(30) NOT NULL,
Date_of_birth DATE NOT NULL,
email_id VARCHAR(20) NOT NULL,
PhoneNumber BIGINT NOT NULL,
Address  varchar(30) NOT NULL,
City_Name  varchar(20) NOT NULL,
State_name varchar(20) NOT NULL,
Gender    varchar(10) NOT NULL,
);

exec sp_RENAME'SignUp.Username','user_Name','COLUMN';

INSERT INTO Signup
values(004,'RAJ','Raj@2314','Raj@2314','RAJ','KUMAR','1999-04-12','raj4221@gmail.com',9776524234,'SREWSDFERFVRE','KRISHNAGIRI','TAMILNADU','MALE');


SELECT * FROM SignUp;

-- this stored procedure is used to update the value of the password column with the help of login id
CREATE PROCEDURE Update_infos 
@Loginid INT, 
@Password VARCHAR(15)
AS 
BEGIN
 UPDATE SignUp 
SET Password = @Password
WHERE Loginid = @Loginid
END;

-- this stored procedure is used to update the value of the password column with the help of login id



CREATE PROCEDURE Update_info 
@Loginid INT, 
@Password VARCHAR(15)
AS 
BEGIN
 UPDATE SignUp 
SET conformPassword = @Password
WHERE Loginid = @Loginid
END;

EXEC  Update_infos @Loginid = 001, @Password = 'Daniel@123';


-- retrieving the data from both table simultaneously using left join

select * 
from LOGIN L left join SignUp S 
ON L.loginid = s.Loginid;
-- retreving the data from both table simultanoeulsy using right join

select * 
from SignUp s left join LOGIN L
on s.Loginid = L.loginid;
---- these queries are used to locate the table in the database
use demo1;

SELECT name, schema_name(schema_id) AS schema_name
FROM sys.tables;

SELECT name, object_id
FROM sys.tables
WHERE name = 'login';

SELECT *
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME = 'login';
