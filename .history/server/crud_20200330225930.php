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



    
	public function getEmployee($empId) {		
		$sqlQuery = '';
		if($empId) {
			$sqlQuery = "WHERE user_id = '".$empId."'";
		}	
		$empQuery = "
			SELECT user_id, user_name,user_address 
			FROM ".$this->empTable." $sqlQuery
			ORDER BY id DESC";	
		$resultData = mysqli_query($this->dbConnect, $empQuery);
		$empData = array();
		while($empRecord = mysqli_fetch_assoc($resultData) ) {
			$empData[] = $empRecord;
		}
		header('Content-Type: application/json');
		echo json_encode($empData);	
	}
    }
?>