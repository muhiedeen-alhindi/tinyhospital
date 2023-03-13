 <?php
 include('connection.php');
 header('Access-Control-Allow-Origin:*');
 
  $user_id = $_POST['id'];
  $hospital_id = $_POST['hospital'];
  $deparment_id=$_POST['deparment'];
 $patient=  $mysqli->prepare('select user_id,department_id,hospital_id From user_departmnets where user_id =?');
 $patient ->bind_param('i', $user_id);
 $patient ->execute();
 $patient ->store_result();
 $check_patient = $patient->num_rows();
 
 
 
 if ($check_patient  > 0) {
     $response['status'] = "user already exists";
     echo json_encode($response);
 } else {
    $response = array();  

    $query = $mysqli->prepare('INSERT INTO user_departmnets(user_id, hospital_id, department_id) VALUES (?,?,?)');
    $query->bind_param('iii',$user_id, $hospital_id,$deparment_id);  
    $query->execute();
    $response['status'] = "success";
    echo json_encode($response);

 }
 ?>