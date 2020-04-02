<?php
include_once './inc/header.php';

header("Access-Control-Allow-Methods: POST");

// Database connections
require './actions/DBsetup.php';

// Tools 
require './actions/functions.php';


$tool = new toolBox;

$data = json_decode(file_get_contents("php://input"));
if(isset($data->news_id)) {
    $news_id = $data_id;

$sql = "DELETE FROM news WHERE news_id={$news_id}";
$result = mysqli_query($conn, $sql);


    if($result){
        echo $tool->dataStatus(1,"Added!");
    }

} else {
    echo $tool->dataStatus(0,"Failed!");

}