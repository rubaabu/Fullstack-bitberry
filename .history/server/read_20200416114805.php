<?php
include_once './inc/header.php';

// Method of user request
header("Access-Control-Allow-Methods: GET");

// Database connections
require './actions/DBsetup.php';

// Tools 
require './actions/functions.php';
$tool = new toolBox;

//query
$sql = $conn->prepare("SELECT * FROM news JOIN user ON news_created_by=user_id");
$result = $sql->execute();

if(mysqli_num_rows($result) > 0){
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo $tool->dataStatus(1,$rows);
} 
else{
    echo $tool->dataStatus(0,"Error");

}
