<?php 


class dataBase {

    public $conn;

    public function connect(){
        $this->conn = new mysqli('localhost','root' ,'', 'covid-19');

        if ($this->conn->connect_errno) {
            echo "Failed to connect to MySQL: " . $this->conn->connect_error;
        } else {
            echo "yeee";
        }
    }

    public function disConnect() {
        $this->conn = mysqli_close($this->conn);
    }
    
    
}

$err = new dataBase();
echo $err->connect();
?>