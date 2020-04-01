<?php
include_once './inc/header.php';

header("Access-Control-Allow-Methods: GET");

require './DBsetup.php';


$allUsers = mysqli_query($conn,"SELECT * FROM news JOIN user ON news_created_by=user_id");

if(mysqli_num_rows($allUsers) > 0){
    $all_users = mysqli_fetch_all($allUsers,MYSQLI_ASSOC);
    echo json_encode(["success"=>1,"news"=>$all_users]);
}
else{
    echo json_encode(["success"=>0]);
}
$conn->close();