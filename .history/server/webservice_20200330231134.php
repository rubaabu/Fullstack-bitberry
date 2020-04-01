<?php 


header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');

function sendResponse($resp_code,$data,$message){
        echo json_encode(array('code'=>$resp_code,'message'=>$message,'data'=>$data));
    }



$conn=getConnection();

if($conn==null){
    //send response if connection error occurred.
    sendResponse(500,$conn,'Server Connection Error');
}else{
    $sql = "SELECT id, name, email, contact FROM user";
    $result = $conn->query($sql);
    
    //check if user list available 
    if ($result->num_rows > 0) {
        $users=array();
        while($row = $result->fetch_assoc()) {
            $user=array(
                "id" =>  $row["id"],
                "name" => $row["name"],
                "email" => $row["email"],
                "contact" => $row["contact"],
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