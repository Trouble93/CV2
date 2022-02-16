<?php
include 'functions.php';
$conn = conn();
if (($_POST['vegetable'])) {
    $vegetable = $_POST['vegetable'];
    $sql = "INSERT INTO new_garden (name, count) VALUES ('{$vegetable}', 0)";
    if (mysqli_query($conn, $sql)) {
        $sqlSelect = "SELECT name, COUNT(`name`) as c FROM `new_garden` GROUP BY `name`";
        $result = mysqli_query($conn, $sqlSelect);
        $counts = [];
        while (($row = mysqli_fetch_array($result, MYSQLI_ASSOC))) {
            $counts[$row['name']] = $row["c"];
        }
        echo json_encode($counts);
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);

}


