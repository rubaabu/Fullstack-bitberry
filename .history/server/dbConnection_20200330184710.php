<?php 
class dataBase {

    public $hostDB = "localhost";
    public $userDB = "root";
    public $passDB = "";
    public $databaseDB = "";

    public $conn;

    public function connect(){
        $this->conn = new mysqli($this->hostDB,$this->userDB,$this->passDB,$this->databaseDB);

        if ($this->conn->connect_errno) {
            echo "Failed to connect to MySQL: " . $this->conn->connect_error;
        }
    }

    public function disConnect() {
        $this->conn = mysqli_close($this->conn);
    }
    
    
}

?>