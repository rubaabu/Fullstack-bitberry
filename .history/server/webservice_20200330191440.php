<?php
header("Content-Type:application/json");

if(!empty($_GET['news_id'])){
    $news_id = $_GET['news_id'];
    
    require_once './crud.php';
    $test = new userClass;

    if(empty($test->title) && empty($test->info)){

        response(200, "info not found", NULL, NULL);
    }else{
                        response(200, "info found" , $name, $price);
        }


}   else {
    response(400, "Invalid request", NULL, NULL);
}
?>