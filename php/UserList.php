<?php

$getIn = file_get_contents('php://input');
$getIn = json_decode($getIn,true);
$userID = $getIn['userID'];

require_once 'connectDatabase.php';
$Tool = new funTool();
$conn = $Tool->connectDatabase();
$sql = "select lost_name,lost_id from losts
        where loster_id = $userID";
$res = $conn->query($sql);
$rows = mysqli_fetch_all($res);
echo json_encode($rows);


