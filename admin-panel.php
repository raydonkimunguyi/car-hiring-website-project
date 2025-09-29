<?php
session_start();
include 'db.php';

if (!isset($_SESSION['admin'])) {
    header("Location: admin_login.php");
    exit();
}

// Fetch all cars
$result = mysqli_query($conn, "SELECT * FROM cars");
?>