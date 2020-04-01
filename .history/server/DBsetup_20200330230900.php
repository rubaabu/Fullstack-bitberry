<?php
    function getConnection()
    {
        $host = 'host';
        $db_name = 'database_name';
        $username = 'user';
        $password = 'your_password';
        $conn= new mysqli($host, $username, $password, $db_name);
        if ($conn->connect_error) {
            $conn= null;
        }
        return $conn;
    }
?>