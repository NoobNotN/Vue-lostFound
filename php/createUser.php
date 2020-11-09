<?php
//接取ajax
require_once 'connectDatabase.php';
$Tool = new funTool();
$conn = $Tool->connectDatabase();

$getIn = file_get_contents('php://input');
$getIn = json_decode($getIn, true);
$userName = $getIn['userName'];
$passWord = $getIn['passWord'];
$nameUser = $getIn['nameUser'];
$userTel  = $getIn['userTel'];

$sql = "SELECT * FROM users where userName = '$userName' ";
$sqlres = $conn->query($sql);
if($sqlres->num_rows != 0){
    die('0');
}

$sql = "INSERT INTO users(userName, passWord, nameUser, userTel) VALUES ('$userName','$passWord','$nameUser','$userTel')";
if ($conn->query($sql) === TRUE) {
    echo "1";
} else {
    echo "Error:" . $sql . "\n" . $conn->error;
}

$conn->close();
?>


