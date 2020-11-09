<?php


$getIn = file_get_contents('php://input');
$getIn = json_decode($getIn,true);
$losterID = $getIn['losterID'];
$lostPlace = $getIn['lostPlace'];
$lostTime = $getIn['lostTime'];
$moreText= $getIn['moreText'];
$lostName = $getIn['lostName'];

require_once 'connectDatabase.php';
$Tool = new funTool();
$conn = $Tool->connectDatabase();
$sql = "insert into losts (loster_id,lost_name,lost_place,lost_time,lost_text)
        value ($losterID,'$lostName','$lostPlace','$lostTime','$moreText')";

$res = $conn->query($sql);
echo $sql;
echo var_dump($res);
