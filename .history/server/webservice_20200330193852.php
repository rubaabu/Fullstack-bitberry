<?php
header("Content-Type:application/json");



if(!empty($_GET['news_id'])){
    $news_id = $_GET['news_id'];
    
    require_once './crud.php';
    $test = new userClass;
    $read = $test->readNews();
    if(empty($read->title) && empty($read->info)){

        response(200, "info not found", NULL, NULL);
    
    } else {

        response(200, "info found" , $read->title, $read->info);
        
    }


}   else {
    response(400, "Invalid request", NULL, NULL);
}
// Function for delivering a JSON response
function response($status,$status_message,$title,$info){
        

    header("HTTP/1.1 $status $status_message");


    $response['status']=$status;
    $response['status_message']=$status_message;
    $response['news_title']=$title;
    $response['news_info']=$info;


    $json_response=json_encode($response);


    echo $json_response;
};

