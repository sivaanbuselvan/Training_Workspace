USE [demo1]
GO
/****** Object:  StoredProcedure [dbo].[Update_info]    Script Date: 8/26/2024 5:26:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[Update_login] 
@Loginid INT, 
@Password VARCHAR(15)
AS 
BEGIN
 UPDATE login
SET Password = @Password
WHERE login_id = @Loginid
END;

