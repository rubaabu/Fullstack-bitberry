<?php 
require './DBsetupe.php';

class userClass extends dataBase {

    public function readNews() {
        $user_id = "";
        $sql = "SELECT * FROM news WHERE news_id= '$news_id'";
    }
}

?>