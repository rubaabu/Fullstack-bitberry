<?php
 
        $host = 'localhost';
        $db_name = 'covid-19';
        $username = 'root';
        $password = '';

        $conn= mysqli_connect($host, $username, $password, $db_name);
        if ($conn->connect_error) {
            $conn= null;
        }
        
    
?>