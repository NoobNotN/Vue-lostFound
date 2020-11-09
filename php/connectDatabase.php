<?php
class funTool{
    function connectDatabase(){
        $servername = "localhost";
        $username = "rooter";
        $password = "NoobNWZ";
        $dbName = 'LostFound';
        $conn = new mysqli($servername, $username, $password, $dbName);
        if ($conn->connect_error) {
            die("连接数据库服务器失败: " . $conn->connect_error);
        }
        return $conn;
    }
}
