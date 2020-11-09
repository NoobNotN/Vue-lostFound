<?php
require_once 'connectDatabase.php';
$Tool = new funTool();
$conn = $Tool->connectDatabase();
$sql = "select lost_id,lost_name,lost_place,lost_time,users.nameUser,lost_text,userTel from losts
        inner join users on loster_id = users.id";
$res = $conn->query($sql);
$rows = mysqli_fetch_all($res);
echo json_encode($rows);
