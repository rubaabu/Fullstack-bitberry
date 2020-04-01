<?php 

class toolBox {

    public function stripData($data) {
        
    $var = trim($data);
    $var = strip_tags($var);
    $var = htmlspecialchars($var);

    return $var;
    }
}