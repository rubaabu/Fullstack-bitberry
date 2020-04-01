<?php
include_once './inc/header.php';

header("Access-Control-Allow-Methods: PUT");

require './actions/DBsetup.php';
require './actions/functions.php';

$tool = new toolBox;

$data = json_decode(file_get_contents("php://input"));

if(isset($data->news_id)
    && !empty(trim($data->news_title))
    && !empty(trim($data->news_info))
    && !empty(trim($data->news_status))
    && !empty(trim($data->news_created_by))
    && !empty(trim($data->news_created_at))
    && !empty(trim($data->news_updated_by))
) {
    $news_id =  $tool->stripData($data->news_title);
    $news_title      = $tool->stripData($data->news_title);
    $news_info       = $tool->stripData($data->news_info);
    $news_status     = $tool->stripData($data->news_status);
    $news_created_by = $tool->stripData($data->news_created_by);
    $news_created_at = $tool->stripData($data->news_created_at);
    $news_updated_by = $tool->stripData($data->news_updated_by);

$sql = "UPDATE news SET news_id='$news_id' news_title ='$news_title', news_info='$news_info', news_status='$news_status', news_updated_by='$news_updated_by' WHERE news_id={$data->news_id}";

    $result = mysqli_query($conn, $sql);
    if($result === TRUE){
        echo $tool->dataStatus(1,"Updated!");
    } else {
        echo $tool->dataStatus(0,"Error!");

    }

} else {
    echo $tool->dataStatus(0,"Failed!");
    
}