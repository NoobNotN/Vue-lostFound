<?php

$getIn = file_get_contents('php://input');
$getIn = json_decode($getIn, true);
$lostID = $getIn['lostID'];

require_once 'connectDatabase.php';
$Tool = new funTool();
$conn = $Tool->connectDatabase();
$sql = "delete from losts 
where lost_id = $lostID";

$res = $conn->query($sql);

echo var_dump($res);
