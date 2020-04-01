<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require './DBsetup.php';
$data = json_decode(file_get_contents("php://input"));

if(isset($data->id) 
 && isset($data->news_title) 
 && isset($data->news_info) 
 && isset($data->news_status) 
 && isset($data->news_created_by) 
 && isset($data->news_created_at) 
 && isset($data->news_updated_by)
 && !empty(trim($data->news_title))
 && !empty(trim($data->news_info))
 && !empty(trim($data->news_status))
 && !empty(trim($data->news_created_by))
 && !empty(trim($data->news_created_at))
 && !empty(trim($data->news_updated_by)))