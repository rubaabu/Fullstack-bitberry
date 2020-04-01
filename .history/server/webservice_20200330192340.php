<?php
header("Content-Type:application/json");


// Function for delivering a JSON response
function response($title,$info){
        
    /*HTTP 1.1 provides a persistent connection
    that allows multiple requests to be batched
    or pipelined to an output buffer */
    header("HTTP/1.1 $status $status_message");

    // $response array
  
    $response['news_title']=$title;
    $response['news_info']=$info;

    //Generating JSON from the $response array
    $json_response=json_encode($response);

    // Outputting JSON to the client
    echo $json_response;
}


if(!empty($_GET['news_id'])){
    $news_id = $_GET['news_id'];
    
    require_once './crud.php';
    $test = new userClass;

    if(empty($test->title) && empty($test->info)){

        response(200, "info not found", NULL, NULL);
    
    } else {

        response(200, "info found" , $test->title, $test->info);
        
    }


}   else {
    response(400, "Invalid request", NULL, NULL);
}
?>