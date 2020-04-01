<?php 

// require './DBsetup.php';

class Rest{
    private $host  = 'localhost';
    private $user  = 'root';
    private $password   = "";
    private $database  = "covid-19";      
    private $empTable = 'user';	
    private $dbConnect = false;
    
    public function __construct(){
        if(!$this->dbConnect){ 
            $conn = new mysqli($this->host, $this->user, $this->password, $this->database);
            if($conn->connect_error){
                die("Error failed to connect to MySQL: " . $conn->connect_error);
            }else{
                $this->dbConnect = $conn;
            }
        }
    }
    }
?>