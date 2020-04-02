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

    // Echo the status of the request
    // 1. Parameter is the status of the request 0 or 1 
    // 2. Parameter describe the status
    public function dataStatus($success, $msg) {
        $show = json_encode(["success"=>$success,"msg"=>$msg]);
        return $show;
    }
}