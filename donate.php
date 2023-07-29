<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Connect to your MySQL database
  $host = "localhost"; // Replace with your database host
  $username = "your_username"; // Replace with your database username
  $password = "your_password"; // Replace with your database password
  $database = "your_database"; // Replace with your database name

  $conn = new mysqli($host, $username, $password, $database);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Get the selected blood group from the form
  $bloodGroup = $_POST["donate-blood-group"];

  // Insert the blood donation details into the database
  $sql = "INSERT INTO blood_donations (blood_group) VALUES ('$bloodGroup')";

  if ($conn->query($sql) === TRUE) {
    echo "Blood donation details stored successfully!";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>
