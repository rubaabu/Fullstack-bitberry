<?php 

require './DBsetup.php';

    class crud extends dataBase
    {
        public function getEmployee($empId)
        {
            $sqlQuery = '';
            if ($empId) {
                $sqlQuery = "WHERE id = '".$empId."'";
            }
            $empQuery = "
		SELECT news_id, news_title,news_info 
		FROM ".$this->empTable." $sqlQuery
		ORDER BY id DESC";
            $resultData = mysqli_query($conn, $empQuery);
            $empData = array();
            while ($empRecord = mysqli_fetch_assoc($resultData)) {
                $empData[] = $empRecord;
            }
            header('Content-Type: application/json');
            echo json_encode($empData);
        }
    }
?>