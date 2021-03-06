<?php
include_once './inc/header.php';

// Method of user request
header("Access-Control-Allow-Methods: GET");

// Database connections
require './actions/DBsetup.php';

//query
$sql = "SELECT * FROM news JOIN user ON news_created_by=user_id";
$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result) > 0){
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(["success"=>1,"msg"=>$rows]);
}
else{
    echo json_encode(["success"=>0, "msg"=> "Error"]);
}
$conn->close();