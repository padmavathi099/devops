<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost"; // Change to your server
    $username = "padmavathi"; // Change to your MySQL username
    $password = "12345"; // Change to your MySQL password
    $dbname = "register"; // Change to your database name

    // Create a connection
    $conn = new mysqli('localhost','padmavathi','12345', 'register');

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve form data
    $username = $_POST["username"];
    $email = $_POST["email"];
    $phoneno = $_POST["phoneno"];
    $password = $_POST["password"];

    // Prepare and execute the SQL statement to insert data
    $sql = "INSERT INTO user(username, email, phoneno, password) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $username, $email, $phoneno, $password);

    if ($stmt->execute()) {
        echo "Registration successful";
        header("Location: main.html");
        exit;
        
    } 
    else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>


