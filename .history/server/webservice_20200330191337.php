<?php
header("Content-Type:application/json");

if(!empty($_GET['news_id'])){
    $news_id = $_GET['news_id'];
    
    require_once './crud.php';
    $test = new userClass;

    if(empty($test->title) && empty($test->info)){
        
        response(200, "car not found", NULL, NULL);
    }


}

?>