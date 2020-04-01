<?php 

$requestMethod = $_SERVER["REQUEST_METHOD"];
include('./crud.php');
$api = new Rest();
switch($requestMethod) {
	case 'GET':
		$empId = '';	
		if($_GET['user_id']) {
			$empId = $_GET['user_id'];
		}
		$api->getEmployee($empId);
		break;
	default:
	header("HTTP/1.0 405 Method Not Allowed");
	break;
}
?>
