<html>
<body>
<?php  
  
$con = mysqli_connect('127.0.0.1','root','');  
  
if(!$con)  
{  
    echo 'not connect to the server';  
}  
if(!mysqli_select_db($con,'final'))  
{  
    echo 'database not selected';  
}  
  
$username = $_POST['username'];  
$password = $_POST['password'];
$email = $_POST['email'];    
  
$sql = "INSERT INTO last (username,password,email) VALUES ('$username','$password','$email')";  
  
if(!mysqli_query($con,$sql))  
{  
    echo 'Not inserted';  
}  
else  
{  
    echo 'Data Inserted';  
}  
header("refresh:3; url=indexquiz.html")  
?>  
    </body>
    </html>