<?php

require './DBsetup.php';
$allUsers = mysqli_query($db_conn,"SELECT * FROM `users`");
if(mysqli_num_rows($allUsers) > 0){
    $all_users = mysqli_fetch_all($allUsers,MYSQLI_ASSOC);
    echo json_encode(["success"=>1,"users"=>$all_users]);
}
else{
    echo json_encode(["success"=>0]);
}