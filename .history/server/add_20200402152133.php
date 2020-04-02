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

//Chaeck of setting the data
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
    
    // Query
    $sql = "INSERT INTO news (news_title, news_info, news_status, news_created_by, news_created_at, news_updated_by) VALUES ('$news_title','$news_info','$news_status','$news_created_by','$news_created_at',
    '$news_updated_by')";

    $result = mysqli_query($conn, $sql);

    if($result === TRUE){
        echo $tool->dataStatus(1,"Added!");
    }

} 
    else {
        echo $tool->dataStatus(0,"Failed!");

    
}