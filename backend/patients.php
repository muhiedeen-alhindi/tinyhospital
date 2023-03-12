<?php 
include('connection.php');
header('Access-Control-Allow-Origin:*');
$id = $_POST['id'];
$hospital = $_POST['hospital'];

$response = array();  

$query = $mysqli->prepare('INSERT INTO hospital_users(user_id, hospital_id) VALUES (?,?)');
$query->bind_param('ii', $id, $hospital);  
$query->execute();
$response['status'] = "success";
echo json_encode($response);
?>
 