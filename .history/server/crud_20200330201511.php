<?php 

require './DBsetup.php';

function newsRead($conn){
    $sql = "SELECT * FROM user WHERE user_id=$id";

    // Perform a query on the DB
    $result = mysqli_query($conn, $sql);

    // Fetch the query into $row
    $row = mysqli_fetch_assoc($result);
   
    // Store values into the variables
    $name=$row['user_name'];
    $address=$row['user_address'];

    // Close the DB connection
    mysqli_close($conn);
}
?>