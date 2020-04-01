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



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ddd
</body>
</html>