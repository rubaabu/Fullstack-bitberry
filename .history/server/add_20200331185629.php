<?php
include_once './header.php';

header("Access-Control-Allow-Methods: POST");

require './DBsetup.php';
require './functions.php';

$tool = new toolBox;

$data = json_decode(file_get_contents("php://input"));

$news_title = $tool->stripData($data->news_title);
$news_info = $tool->stripData($data->news_info);
$news_status = $tool->stripData($data->news_status);
$news_created_by = $tool->stripData($data->news_created_by);
$news_created_at = $tool->stripData($data->news_created_at);
$news_updated_by = $tool->stripData($data->news_updated_by);

if(!empty($news_title)
    && !empty($news_info)
    && !empty($news_status)
    && !empty($news_created_by)
    && !empty($news_created_at)
    && !empty($news_updated_by)
) {
   
    $sql = "INSERT INTO news (news_title, news_info, news_status, news_created_by, news_created_at, news_updated_by) VALUES ('$news_title','$news_info','$news_status','$news_created_by','$news_created_at',
    '$news_updated_by')";

    $result = mysqli_query($conn, $sql);
    if($result === TRUE){
        echo json_encode(["success"=>1,"msg"=>"Added"]);
    } else {
        echo json_encode(["success"=>0,"msg"=>"NOT added!"]);
    }

} else {
    echo json_encode(["success"=>0,"msg"=>"Please fill all the fields!"]);
    
}