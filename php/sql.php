<?php
require_once 'connectDatabase.php';
$Tool = new funTool();
$conn = $Tool->connectDatabase();

$sql = "delete ";

if ($conn->query($sql) === true){
    echo "success";
} else {
    echo "error".$conn->error;
}

$conn->close();
