<?php 
class dataBase {

    public $hostDB = "localhost";
    public $userDB = "root";
    public $passDB = "";
    public $databaseDB = "covid-19";

    public $conn;
    public $ruba;
    // Establishes a connection with the database
    public function connect(){
        $this->conn = new mysqli($this->hostDB,$this->userDB,$this->passDB,$this->databaseDB);
        $this->ruba = "ha";
        if ($this->conn->connect_errno) {
            echo "Failed to connect to MySQL: " . $this->conn->connect_error;
        } else {
            echo "ee";
        }
        echo $this->ruba;
    }

    // Closes existend connection to the database
    public function disConnect() {
        $this->conn = mysqli_close($this->conn);
    }
    
    
}
$test = new dataBase;
$read = $test->connect();
echo $read->ruba;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>