<?php
function conn(): mysqli
{
    $servername = "localhost";
    $database = "garden_game";
    $username = "root";
    $password = "flexi140";
    $conn = mysqli_connect($servername, $username, $password, $database);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}
