<?php
 
    $DBhost = 'localhost';
    $DBuser = 'root';
    $DBpassword = '';
    $DBname = 'covid-19';   
        $conn= mysqli_connect($DBhost, $DBuser, $DBpassword, $DBname);

            if ($conn->connect_error) {
                $conn= null;
            }
            

