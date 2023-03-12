<?php 
  
 include('connection.php');
 header('Access-Control-Allow-Origin:*');
 
  $id = $_POST['id'];
  $hospital = $_POST['hospital'];
  $patient=  $mysqli->prepare('select user_id from hospital_users where user_id =?');
 $patient ->bind_param('i', $id);
 $patient ->execute();
 $patient ->store_result();
 $check_patient = $patient->num_rows();
 
 
 
 if ($check_patient  > 0) {
     $response['status'] = "user already exists";
     echo json_encode($response);
 } else {
    $response = array();  

    $query = $mysqli->prepare('INSERT INTO hospital_users(user_id, hospital_id) VALUES (?,?)');
    $query->bind_param('ii', $id, $hospital);  
    $query->execute();
    $response['status'] = "success";
    echo json_encode($response);
 
 }
 
 