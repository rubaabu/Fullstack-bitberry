<?php
 // Database connectopn
    $DBhost = '173.212.235.205';
    $DBuser = 'rubacode_rubacodefactory';
    $DBpassword = 'Xer{QLc2!2LT';
    $DBname = 'rubacode_api';   
    
    $conn= mysqli_connect($DBhost, $DBuser, $DBpassword, $DBname);

            if ($conn->connect_error) {
                echo "Database is not connected";
            }
            

