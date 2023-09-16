<?php
// Database connection parameters
$servername = "localhost";
$username = "padmavathi";
$password = "12345";
$dbname = "register";

// Create connection
$conn = new mysqli('localhost','padmavathi','12345','register');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user input
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare and execute SQL query
$sql = "SELECT * FROM user WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Valid credentials, user logged in
    //echo "Login Successful";
   header("Location:main.html");
   // exit;
} else {
    // Invalid credentials
    echo "Invalid credentials. Please try again.";
}

// Close the database connection
$conn->close();
?>
