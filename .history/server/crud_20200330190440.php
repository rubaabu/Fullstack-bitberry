<?php 
require './DBsetupe.php';

class userClass extends dataBase {

    public function readNews() {
        $news_id = "";
        $sql = "SELECT * FROM news WHERE news_id =$news_id";
        $result = mysqli_query($this->conn, $sql);
        $row = mysqli_fetch_assoc($result);
        
        $name=$row['name'];
        $price=$row['price'];
    }
}

?>