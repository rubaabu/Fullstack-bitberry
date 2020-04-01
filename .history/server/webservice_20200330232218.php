<?php 

include_once './DBsetup.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');

$conn=getConnection();

if($conn==null){
    //send response if connection error occurred.
    sendResponse(500,$conn,'Server Connection Error');
}else{
    $sql = "SELECT user_id, user_name,user_address FROM user WHERE user_id=1";
    $result = $conn->query($sql);
    
    //check if user list available 
    if ($result->num_rows > 0) {
        $users=array();
        while($row = $result->fetch_assoc()) {
            $user=array(
                "user_id" =>  $row["user_id"],
                "user_name" => $row["user_name"],
                "user_address" => $row["user_address"],
               
            );
            array_push($users,$user);
        }
        sendResponse(200,$users,'User List');
    } else {
        sendResponse(404,[],'User not available');
    }
    //closing connection
    $conn->close();
}


function sendResponse($resp_code,$data,$message){
        echo json_encode(array('code'=>$resp_code,'message'=>$message,'data'=>$data));
    }
