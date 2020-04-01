<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

require './DBsetup.php';

if(isset($data->news_title) && isset($data->news_info) && isset($data->news_status) && isset($data->news_created_by) && isset($data->news_created_at) && isset($data->news_updated_by))


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
 