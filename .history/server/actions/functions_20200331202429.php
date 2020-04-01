<?php 

class toolBox {
    
    // trim - strips whitespace (or other characters) from the beginning and end of a string
    // strip_tags — strips HTML and PHP tags from a string
    // htmlspecialchars converts special characters to HTML entities
    public function stripData($data) {
        
    $var = trim($data);
    $var = strip_tags($var);
    $var = htmlspecialchars($var);

    return $var;
    }

    public function dataStatus($success, $msg) {
  
        echo json_encode(["success"=>$success,"msg"=>"$msg]);
        
    }
}