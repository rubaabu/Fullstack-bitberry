<?php 

$hostDB = "localhost";
$userDB = "root";
$passDB = "";
$databaseDB = "covid-19";

$conn = mysqli_connect($hostDB, $userDB, $passDB, $databaseDB);
if(!$conn){
    die("Connection failed". mysqli_connect_error());
}