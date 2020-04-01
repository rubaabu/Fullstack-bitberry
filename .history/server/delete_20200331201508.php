<?php
include_once './inc/header.php';

header("Access-Control-Allow-Methods: POST");

require './DBsetup.php';

$data = json_decode(file_get_contents("php://input"));
if(isset($data->news_id)) {
    $news_id = $data_id;

$sql = "DELETE FROM news WHERE news_id={$news_id}";
$result = mysqli_query($conn, $sql);


    if($result === TRUE){
        echo json_encode(["success"=>1,"msg"=>"Deleted!"]);
    }
} else {
        echo json_encode(["success"=>0,"msg"=>"Something went wRong"]);
}