<?php 
class toolBox {
    public function ($data) {
        
    $var = trim($data);
    $var = strip_tags($var);
    $var = htmlspecialchars($var);

    return $var;
    }
}