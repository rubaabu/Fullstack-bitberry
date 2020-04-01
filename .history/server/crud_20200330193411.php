<?php 
require './DBsetup.php';

class userClass extends dataBase {

    public $title;
    public $info;

    public function readNews() {
        $news_id = "";
        $sql = "SELECT * FROM news WHERE news_id =$news_id";

        $this->connect();
        $result = mysqli_query($this->conn, $sql);
        $row = mysqli_fetch_assoc($result);

        $this->title=$row['news_title'];
        $this->info=$row['news_info'];
        
        $this->disConnect();
    }
}

?>