<?php 
require './DBsetup.php';

class userClass extends dataBase {

    public function readNews() {
        $news_id = "";
        $sql = "SELECT * FROM news WHERE news_id =$news_id";

        $this->connect();
        $result = mysqli_query($this->conn, $sql);
        $row = mysqli_fetch_assoc($result);

        $title=$row['news_title'];
        $info=$row['news_info'];
        
        $this->disConnect();
    }
}

?>