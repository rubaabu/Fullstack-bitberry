<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

require './DBsetup.php';

if( isset($data->news_title) 
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
&& !empty(trim($data->news_updated_by))
) {
    $news_title      =  mysqli_real_escape_string($conn, trim($data->news_title));
    $news_info       =  mysqli_real_escape_string($conn, trim($data->news_info));
    $news_status     =  mysqli_real_escape_string($conn, trim($data->news_status));
    $news_created_by =  mysqli_real_escape_string($conn, trim($data->news_created_by));
    $news_created_at =  mysqli_real_escape_string($conn, trim($data->news_created_at));
    $news_updated_by =  mysqli_real_escape_string($conn, trim($data->news_updated_by));
}

    $sql = "INSERT INTO news (news_title, news_info, news_status, news_created_by, news_created_at, news_updated_by) VALUES ('$news_title','$news_info','$news_status','$news_created_by','$news_created_at',
    '$news_updated_by')";

    $result = mysqli_query($conn, $sql);
    if($result === TRUE){
        echo json_encode(["success"=>1,"msg"=>"Added"]);
    }

if ($_POST) {
    $fname = $_POST['first_name'];
    $lname = $_POST['last_name'];
    $dob = $_POST[ 'date_of_birth'];
 
    $sql = "INSERT INTO user (first_name, last_name, date_of_birth) VALUES ('$fname', '$lname', '$dob')";
     if($connect->query($sql) === TRUE) {
        echo "<p>New Record Successfully Created</p>" ;
        echo "<a href='../create.php'><button type='button'>Back</button></a>";
         echo "<a href='../index.php'><button type='button'>Home</button></a>";
    } else  {
        echo "Error " . $sql . ' ' . $connect->connect_error;
    }
 
    $connect->close();
 }
 