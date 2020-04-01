<?php 

require './DBsetup.php';


$sql = "SELECT * FROM news WHERE news_id=$id";

// Perform a query on the DB
$result = mysqli_query($conn, $sql);

// Fetch the query into $row
$row = mysqli_fetch_assoc($result);
   
    // Store values into the variables
    $title=$row['news_title'];
    $info=$row['news_info'];

// Close the DB connection
mysqli_close($conn);

?>