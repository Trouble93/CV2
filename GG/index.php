<?php
include 'functions.php';
$conn = conn();
$sql = "SELECT name, COUNT(`name`) as c FROM `new_garden`  GROUP BY `name`";
$result = mysqli_query($conn, $sql);
$allSql = "SELECT COUNT(`name`) FROM `new_garden` ";
$allResult = mysqli_query($conn, $allSql);
$all = mysqli_fetch_array($allResult);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="style.css" rel="stylesheet">
    <title>GG</title>
</head>
<body>
<div class="game-content">
    <div class="statistics">
        <h2 class="statistics-title">Statistics</h2>
        <h3 class="all-count">All: <span id="all"><?php echo $all[0] ?></span></h3>
        <?php if ($row = mysqli_fetch_array($result)) {
            foreach ($result as $row) {
                $veg = $row["name"];
                $count = $row["name"]; ?>
                <h4>
                    <?php echo $veg ?> :
                    <span class="veg-name" id="<?php echo $veg ?>">
                        <?php echo $row["c"] ?>
                    </span>
                </h4>
            <?php }
        } ?>
    </div>
    <?php for ($i = 0; $i < 20; $i++) { ?>
        <div class="container">
            <img class="image" src="" alt="">
        </div> <?php } ?>


</div>

<script src="script.js"></script>
</body>
</html>
