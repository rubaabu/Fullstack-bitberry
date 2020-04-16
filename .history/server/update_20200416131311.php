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

if(isset($data->news_id)
   
    && !empty(trim($data->news_title))
    && !empty(trim($data->news_info))
    && !empty(trim($data->news_status))
   
   
) {
    $news_id =  $tool->stripData($data->news_id);
    $news_title      = $tool->stripData($data->news_title);
    $news_info       = $tool->stripData($data->news_info);
    $news_status     = $tool->stripData($data->news_status);
    


    // Prepared Query
    $sql = "UPDATE news SET news_title =?, news_info=?, news_status=? WHERE news_id=?";
    if($stmt = mysqli_prepare($conn,$sql)){
         // Bind variables to the prepared statement as parameters
        mysqli_stmt_bind_param($stmt, "sssi", $param_titl, $param_info, $param_status, $param_id);
        // parameters
        $param_titl = $news_title;
        $param_info = $news_info;
        $param_status = $news_status;
        $param_id = $news_id;
        // execute the prepared statement
        if(mysqli_stmt_execute($stmt)){
            echo $tool->dataStatus(1,"Updated!");
        } else {
            echo $tool->dataStatus(0,"Error!");

        }
    }

    // $result = mysqli_query($conn, $sql);
   

} else {
    echo $tool->dataStatus(0,"Failed!");
    
}