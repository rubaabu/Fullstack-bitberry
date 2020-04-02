<?php
include_once './inc/header.php';
// Method of user request
header("Access-Control-Allow-Methods: POST");

// Database connections
require './actions/DBsetup.php';

// Tools 
require './actions/functions.php';
$tool = new toolBox;

//json_decode convert Json to obj
//File_get_contents convert the data to string
$data = json_decode(file_get_contents("php://input"));
if(isset($data->news_id)) {
    $news_id = $data_id;
    
//Query
$sql = "DELETE FROM news WHERE news_id={$news_id}";
$result = mysqli_query($conn, $sql);


    if($result){
        echo $tool->dataStatus(1,"Added!");
    }

} else {
    echo $tool->dataStatus(0,"Failed!");

}