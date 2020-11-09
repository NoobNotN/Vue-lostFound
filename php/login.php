<?php
require_once 'connectDatabase.php';
$Tool = new funTool();
$conn = $Tool->connectDatabase();
////开放跨域
//header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Headers:*');
//接取ajax
    $getIn = file_get_contents('php://input');
    $getIn = json_decode($getIn,true);
    $userName = $getIn['userName'];
    $passWord = $getIn['passWord'];
//    echo 'username:'.$userName." password: ".$passWord;
//    链接数据库服务器
//    验证用户名密码
    $sql = "SELECT * FROM users WHERE userName='$userName' and passWord = '$passWord'";
    $res = $conn->query($sql);
if ($res->num_rows > 0) {
    // 输出数据
    while($row = $res->fetch_assoc()) {
//       生成token
        $tokenKey = 'nwz';
        $tokenUseTime = 300;
        $tokenTime = time()+$tokenUseTime;
        // 生成签名授权码: 将三个参数以&符号拼接，进行md5加密并取加密值的末8位，再与$tokenTime(过期时间）拼接
        $token = substr(md5($userName.'&'.$tokenKey.'&'.$tokenTime),-8).$tokenTime;
//        存入数据库
//        $sql = "INSERT INTO users VALUES ($row[id],$userName,$tokenTime)";
//        $res = $conn->query($sql);

        $response = array('id' => $row['id'],'token' => $token);
        echo json_encode($response);
    }
} else {
//    错误
echo "0";
}

