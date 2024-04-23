<?php
include('connection.php');

echo "test"; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM `login_page` WHERE `email`= '$email' LIMIT 1";
    $row = mysqli_query($conn, $query);
    $result = mysqli_fetch_assoc($row);

    if ($result && password_verify($password, $result['password'])) {
        header("Location: login_signin.php");
        exit(); 
    } else {
        header("Location: login.php"); 
        exit(); 
    }
}
?>






