<?php
 // Database connectopn
    $DBhost = 'localhost';
    $DBuser = 'root';
    $DBpassword = '';
    $DBname = 'bitberry';   
    
    $conn= mysqli_connect($DBhost, $DBuser, $DBpassword, $DBname);

            if ($conn->connect_error) {
                $conn= null;
            }
            

