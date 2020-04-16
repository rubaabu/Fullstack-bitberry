<?php
 // Database connectopn
    $DBhost = 'localhost';
    $DBuser = 'root';
    $DBpassword = '';
    $DBname = 'bitberry';   
    
    $conn= new PDO($DBhost, $DBuser, $DBpassword, $DBname);
    // $conn->setAttribute(PDO::ATTR_ERRMODE)

            if ($conn->connect_error) {
                echo "Database is not connected";
            }
            

