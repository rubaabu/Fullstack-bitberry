<?php
include_once './inc/header.php';

header("Access-Control-Allow-Methods: POST");

require './actions/DBsetup.php';
require './actions/functions.php';

$tool = new toolBox;

$data = json_decode(file_get_contents("php://input"));

if(isset($data->news_title)
    && !empty(trim($data->news_title))
    && !empty(trim($data->news_info))
    && !empty(trim($data->news_status))
    && !empty(trim($data->news_created_by))
    && !empty(trim($data->news_created_at))
    && !empty(trim($data->news_updated_by))
) {
    $news_title      = $tool->stripData($data->news_title);
    $news_info       = $tool->stripData($data->news_info);
    $news_status     = $tool->stripData($data->news_status);
    $news_created_by = $tool->stripData($data->news_created_by);
    $news_created_at = $tool->stripData($data->news_created_at);
    $news_updated_by = $tool->stripData($data->news_updated_by);
    
    
    $sql = "INSERT INTO news (news_title, news_info, news_status, news_created_by, news_created_at, news_updated_by) VALUES ('$news_title','$news_info','$news_status','$news_created_by','$news_created_at',
    '$news_updated_by')";

    $result = mysqli_query($conn, $sql);

    if($result){
        echo $tool->dataStatus(1,"Added!");
    }

} else {
   echo $tool->dataStatus(0,"Failed!");

    
}